import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { tvApi } from "../api";

export default () => {
    const [shows, setShows] = useState({
        today: [],
        thisWeek: [],
        topRated: [],
        popular: [],
        todayError: null,
        thisWeekError: null,
        topRatedError: null,
        popularError: null,
    });
    const getData = async () => {
        const [today, todayError] = await tvApi.today();
        const [thisWeek, thisWeekError] = await tvApi.topRated();
        const [topRated, topRatedError] = await tvApi.topRated();
        const [popular, popularError] = await tvApi.popular();
        setShows({
            today,
            thisWeek,
            topRated,
            popular,
            todayError,
            thisWeekError,
            topRatedError,
            popularError,
        });
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: "black" }}>
            <Text style={{ color: "white" }}>{shows.thisWeek?.length}</Text>
        </View>
    );
};
