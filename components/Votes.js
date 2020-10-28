import React from "react";
import styled from "styled-components/native";

const Container = styled.Text`
    margin-bottom: 5px;
    color: rgb(220, 220, 220);
    font-size: 12px;
    font-weight: 600;
`;

const Votes = ({ votes }) => <Container>⭐ {votes} / 10</Container>;
export default Votes;
