import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions } from "react-native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import { ScrollView } from "react-native";
import Vertical from "../../components/Vertical";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
    width: ${WIDTH}px;
    height: ${HEIGHT / 4}px;
    margin-bottom: 50px;
`;

const Container = styled.View``;
export default ({ loading, nowPlaying, popular }) => {
    return (
        <ScrollView
            style={{
                backgroundColor: "black",
            }}
            contentContainerStyle={{
                flex: 1,
                justifyContent: loading ? "center" : "flex-start",
            }}
        >
            {loading ? (
                <ActivityIndicator color="white" size="small" />
            ) : (
                <>
                    <SliderContainer>
                        <Swiper controlsEnabled={false} loop timeout={3}>
                            {nowPlaying.map((movie) => (
                                <Slide
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    overview={movie.overview}
                                    backgrounImage={movie.backdrop_path}
                                    votes={movie.vote_average}
                                    poster={movie.poster_path}
                                />
                            ))}
                        </Swiper>
                    </SliderContainer>
                    <Container>
                        <Title title={"Popular Movies"} />
                        <ScrollView
                            style={{ marginTop: 20 }}
                            contentContainerStyle={{ paddingLeft: 30 }}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                        >
                            {popular.map((movie) => (
                                <Vertical
                                    key={movie.id}
                                    poster={movie.poster_path}
                                    title={movie.title}
                                    votes={movie.vote_average}
                                />
                            ))}
                        </ScrollView>
                    </Container>
                </>
            )}
        </ScrollView>
    );
};
