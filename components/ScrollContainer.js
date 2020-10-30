import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import PropTypes from "prop-types";

const ScrollContinaer = ({ loading, children }) => (
    <ScrollView
        style={{
            backgroundColor: "black",
        }}
        contentContainerStyle={{
            justifyContent: loading ? "center" : "flex-start",
        }}
    >
        {loading ? <ActivityIndicator color="white" size="small" /> : children}
    </ScrollView>
);

ScrollContinaer.propTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default ScrollContinaer;
