import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { apiImage } from "../api";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native-gesture-handler";
import { trimText } from "../utils";

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

const Vertical = ({ id, poster, title, votes }) => (
    <TouchableOpacity>
        <Container>
            <Poster url={poster} />
            <Title>
                {trimText(title, 10)}
                {/* {title.length > 10 ? `${title.slice(0, 10)}...` : title} */}
            </Title>
            <Votes votes={votes} />
        </Container>
    </TouchableOpacity>
);

Vertical.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
};

export default Vertical;
