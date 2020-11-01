import React from "react";
import styled from "styled-components/native";
import Slide from "../../components/Movies/Slide";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import ScrollContinaer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
import VerticalSllider from "../../components/VerticalSlider";

const Container = styled.View``;

export default ({ loading, nowPlaying, popular, upcoming }) => {
    return (
        <ScrollContinaer loading={loading}>
            <>
                <VerticalSllider>
                    {nowPlaying.map((movie) => (
                        <Slide
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            overview={movie.overview}
                            backgroundImage={movie.backdrop_path}
                            votes={movie.vote_average}
                            poster={movie.poster_path}
                        />
                    ))}
                </VerticalSllider>
                <Container>
                    <HorizontalSlider title={"Popular Movies"}>
                        {popular.map((movie) => (
                            <Vertical
                                key={movie.id}
                                id={movie.id}
                                poster={movie.poster_path}
                                title={movie.title}
                                votes={movie.vote_average}
                            />
                        ))}
                    </HorizontalSlider>
                    <List title={"Coming Soon"}>
                        {upcoming.map((movie) => (
                            <Horizontal
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                releaseDate={movie.release_date}
                                poster={movie.poster_path}
                                overview={movie.overview}
                            />
                        ))}
                    </List>
                </Container>
            </>
        </ScrollContinaer>
    );
};
/*

*/
