import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Image, StatusBar, Text } from "react-native";
import { Asset } from "expo-asset";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";

const cacheImages = (images) =>
    images.map((image) => {
        if (typeof image === "string") {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
    const [isReady, setIsReady] = useState(false);
    const loadAssets = () => {
        const images = cacheImages([
            "https://images.unsplash.com/photo-1597688454919-cef3391fa915?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            require("./assets/splash.png"),
        ]);
        const fonts = cacheFonts([Ionicons.font, NavigationContainer.font]);
        return Promise.all([...images, ...fonts]);
    };
    const onFinish = () => setIsReady(true);
    return isReady ? (
        <>
            <NavigationContainer>
                <Stack />
            </NavigationContainer>
            <StatusBar barStyle="light-content" />
        </>
    ) : (
        <AppLoading
            startAsync={loadAssets}
            onFinish={onFinish}
            onError={(e) => console.error(e)}
        />
    );
}
