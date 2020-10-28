import React, { useEffect, useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) =>
    route?.state?.routeNames[route.state.index] || "Movies";

export default ({ navigation, route }) => {
    //console.log(navigation.setOption);
    //부모 navigator랑 소통 가능
    // navigation.setOptions({ title: "Hello from Tabs" });
    // setTimeout(() => navigation.setOptions({ title: "Hello from Tabs" }), 1000);
    // console.log(route);

    // useEffect(() => {
    //     //route가 변하는 매번 아래 코드 실행
    //     navigation.setOptions({
    //         title: route?.state?.routeNames[route.state.index] || "Movies",
    //     });
    // }, [route]);

    //useEffect와 비슷하지만 레이아웃 변경이 다 끝난후에 작동한다는 차이점
    useLayoutEffect(() => {
        const name = getHeaderName(route);
        navigation.setOptions({
            title: name,
            //header 스타일링
            // headerStyle: {
            //     backgroundColor: name === "Tv" ? "blue" : "white",
            // },
            //header hide 여부
            // headerShown: name !== "Tv",
        });
    }, [route]);

    return (
        <Tabs.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: "black",
                    borderTopColor: "black",
                },
            }}
            // screenOptions={({route})=>({
            //object 리턴
            // })}
            screenOptions={({ route }) => {
                return {
                    tabBarIcon: ({ focused }) => {
                        let iconName = Platform.OS === "ios" ? "ios-" : "md-";
                        if (route.name === "Movies") {
                            iconName += "film";
                        } else if (route.name === "Tv") {
                            iconName += "tv";
                        } else if (route.name === "Search") {
                            iconName += "search";
                        } else if (route.name === "Discovery") {
                            iconName += "heart";
                        }
                        return (
                            <Ionicons
                                name={iconName}
                                color={focused ? "white" : "grey"}
                                size={26}
                            />
                        );
                    },
                };
            }}
        >
            <Tabs.Screen name="Movies" component={Movies} />
            <Tabs.Screen name="Tv" component={Tv} />
            <Tabs.Screen name="Search" component={Search} />
            <Tabs.Screen name="Discovery" component={Favs} />
        </Tabs.Navigator>
    );
};
