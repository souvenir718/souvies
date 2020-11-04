import React, { useEffect, useState } from "react";
import { movieApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";
import * as WebBrowser from "expo-web-browser";

export default ({
    navigation,
    route: {
        params: { isTv, id, title, backgroundImage, poster, votes, overview },
    },
}) => {
    const [detail, setDetail] = useState({
        loading: true,
        result: {
            title,
            backgroundImage,
            poster,
            overview,
            votes,
            videos: {
                results: [],
            },
        },
    });

    const getData = async () => {
        const [getDetail, getDetailError] = isTv
            ? await tvApi.show(id)
            : await movieApi.movie(id);
        setDetail({
            loading: false,
            result: {
                ...getDetail,
                title: getDetail.title || getDetail.name,
                backgroundImage: getDetail.backdrop_path,
                poster: getDetail.poster_path,
                overview: getDetail.overview,
                votes: getDetail.vote_average,
            },
        });

        // setLoading(false);
    };

    useEffect(() => {
        getData();
    }, [id]);

    React.useLayoutEffect(() => {
        navigation.setOptions({ title });
    });

    const openBrowser = async (url) => {
        await WebBrowser.openBrowserAsync(url);
    };

    return <DetailPresenter {...detail} openBrowser={openBrowser} />;
};
