import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native-gesture-handler";
import { trimText } from "../utils";
import { useNavigation } from "@react-navigation/native";
const Container = styled.View`
    align-items: center;
    margin-right: 20px;
`;

const Title = styled.Text`
    color: white;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 5px;
`;

const Vertical = ({ id, poster, title, votes, overview }) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail", {
            id,
            title,
            votes,
            poster,
            overview,
        });
    };
    return (
        <TouchableOpacity onPress={goToDetail}>
            <Container>
                <Poster url={poster} />
                <Title>
                    {trimText(title, 10)}
                    {/* {title.length > 10 ? `${title.slice(0, 10)}...` : title} */}
                </Title>
                {votes > 0 && <Votes votes={votes} />}
            </Container>
        </TouchableOpacity>
    );
};

Vertical.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    overview: PropTypes.string,
};

export default Vertical;
