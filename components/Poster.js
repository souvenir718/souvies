import React from "react";
import styled from "styled-components/native";
import Proptypes from "prop-types";

const Image = styled.Image`
    width: 100px;
    height: 160px;
    border-radius: 4px;
`;

const Poster = ({ url }) => <Image source={{ uri: url }} />;

Poster.propTypes = {
    url: Proptypes.string.isRequired,
};

export default Poster;
