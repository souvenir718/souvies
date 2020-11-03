import React, { useState } from "react";
import { ActivityIndicator, RefreshControl, ScrollView } from "react-native";
import PropTypes from "prop-types";

const ScrollContainer = ({
    refreshFn,
    loading,
    children,
    contentContainerStyle,
}) => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        await refreshFn();
        setRefreshing(false);
    };
    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    onRefresh={onRefresh}
                    refreshing={refreshing}
                    tintColor={"white"}
                />
            }
            style={{
                backgroundColor: "black",
            }}
            contentContainerStyle={{
                flex: loading ? 1 : 0,
                justifyContent: loading ? "center" : "flex-start",
                ...contentContainerStyle,
            }}
        >
            {loading ? (
                <ActivityIndicator color="white" size="small" />
            ) : (
                children
            )}
        </ScrollView>
    );
};

ScrollContainer.propTypes = {
    loading: PropTypes.bool,
    children: PropTypes.node.isRequired,
    contentContainerStyle: PropTypes.object,
    refreshFn: PropTypes.func,
};

export default ScrollContainer;
