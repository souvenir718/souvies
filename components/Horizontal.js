import React from "react";
import styled from "styled-components/native";
import Proptypes from "prop-types";
import Poster from "./Poster";
import { formatDate, trimText } from "../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
    padding: 0px 30px;
    margin-bottom: 30px;
    flex-direction: row;
    align-items: flex-start;
`;

const Data = styled.View`
    align-items: flex-start;
    width: 60%;
    margin-left: 25px;
`;

const Title = styled.Text`
    color: white;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Overview = styled.Text`
    margin-top: 10px;
    color: white;
`;

const ReleaseDate = styled.Text`
    font-size: 12px;
    color: white;
`;

const Horizontal = ({ id, title, poster, overview, releaseDate }) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail", {
            id,
            title,
            poster,
            overview,
        });
    };
    return (
        <TouchableOpacity onPress={goToDetail}>
            <Container>
                <Poster url={poster} />
                <Data>
                    <Title>{trimText(title, 30)}</Title>
                    {releaseDate ? (
                        <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate>
                    ) : null}
                    <Overview>{trimText(overview, 120)}</Overview>
                </Data>
            </Container>
        </TouchableOpacity>
    );
};

Horizontal.propTypes = {
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    releaseDate: Proptypes.string,
    overview: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired,
};

export default Horizontal;
