import React from "react";
import { Dimensions } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
const { height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
    width: 100%;
    height: ${HEIGHT / 4}px;
    margin-bottom: 50px;
`;

const VerticalSllider = ({ children }) => (
    <SliderContainer>
        <Swiper controlsEnabled={false} loop timeout={3}>
            {children}
        </Swiper>
    </SliderContainer>
);

VerticalSllider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default VerticalSllider;
