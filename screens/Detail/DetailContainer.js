import React from "react";
import DetailPresenter from "./DetailPresenter ";

export default ({
    navigation,
    route: {
        params: { id, title, backgroundImage, poster, votes, overview },
    },
}) => {
    navigation.setOptions({ title });
    return <DetailPresenter />;
};
