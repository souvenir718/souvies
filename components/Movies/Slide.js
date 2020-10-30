import React from "react";
import styled from "styled-components/native";
import Proptypes from "prop-types";
import { Dimensions, Image } from "react-native";
import { apiImage } from "../../api";
import Poster from "../Poster";
import { TouchableOpacity } from "react-native-gesture-handler";
import Votes from "../Votes";
import { trimText } from "../../utils";

const Container = styled.View`
    height: 100%;
    width: 100%;
`;

const BG = styled.Image`
    height: 100%;
    width: 100%;
    opacity: 0.4;
    position: absolute;
`;

const Content = styled.View`
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const Data = styled.View`
    width: 50%;
    align-items: flex-start;
`;

const Title = styled.Text`
    margin-bottom : 7px
    color: white;
    font-weight: bold;
    font-size: 18px;
`;

const VotesContainer = styled.View`
    margin-bottom: 5px;
`;

const Overview = styled.Text`
    color: rgb(220, 220, 220);
    opacity: 0.7;
    font-size: 14px;
    font-weight: 500;
`;

const Button = styled.View`
    margin-top : 10px
    background-color: #e74c3c;
    padding: 5px 10px;
    border-radius:3px
`;

const ButtonText = styled.Text`
    color: white;
`;

const Slide = ({ id, title, backgrounImage, votes, overview, poster }) => {
    return (
        <Container>
            <BG
                style={{ width: "100%", height: "100%" }}
                source={{ uri: apiImage(backgrounImage) }}
            />
            <Content>
                <Poster url={poster} />
                <Data>
                    <Title>
                        {trimText(title, 20)}
                        {/* {title.length > 20 ? `${title.slice(0, 20)}...` : title} */}
                    </Title>
                    <VotesContainer>
                        <Votes votes={votes} />
                    </VotesContainer>
                    <Overview>
                        {trimText(overview, 80)}
                        {/* {overview.length > 80
                            ? `${overview.slice(0, 80)}...`
                            : overview} */}
                    </Overview>
                    <TouchableOpacity>
                        <Button>
                            <ButtonText>View Details</ButtonText>
                        </Button>
                    </TouchableOpacity>
                </Data>
            </Content>
        </Container>
    );
};

Slide.propTypes = {
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    backgrounImage: Proptypes.string.isRequired,
    votes: Proptypes.number.isRequired,
    overview: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired,
};

export default Slide;
