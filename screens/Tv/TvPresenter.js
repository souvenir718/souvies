import React from "react";
import HorizontalSlider from "../../components/HorizontalSlider";
import ScrollContinaer from "../../components/ScrollContainer";
import Vertical from "../../components/Vertical";
import styled from "styled-components/native";
import Horizontal from "../../components/Horizontal";
import List from "../../components/List";
import VerticalSllider from "../../components/VerticalSlider";
import Slide from "../../components/Movies/Slide";

const Container = styled.View`
    margin-top: 30px;
`;

export default ({ refreshFn, loading, popular, topRated, today, thisWeek }) => (
    <ScrollContinaer refreshFn={refreshFn} loading={loading}>
        <Container>
            <HorizontalSlider title={"Popular Show"}>
                {popular.map((show) => (
                    <Vertical
                        isTv={true}
                        key={show.id}
                        id={show.id}
                        poster={show.poster_path}
                        title={show.name}
                        votes={show.vote_average}
                        overview={show.overview}
                    />
                ))}
            </HorizontalSlider>
            <VerticalSllider>
                {thisWeek.map((show) => (
                    <Slide
                        key={show.id}
                        id={show.id}
                        title={show.name}
                        overview={show.overview}
                        backgroundImage={show.backdrop_path}
                        votes={show.vote_average}
                        poster={show.poster_path}
                    />
                ))}
            </VerticalSllider>
            <HorizontalSlider title={"Top Rated"}>
                {topRated.map((show) => (
                    <Vertical
                        isTv={true}
                        key={show.id}
                        id={show.id}
                        poster={show.poster_path}
                        title={show.name}
                        votes={show.vote_average}
                        overview={show.overview}
                    />
                ))}
            </HorizontalSlider>
            <List title="Airing Todya">
                {today.map((show) => (
                    <Horizontal
                        isTv={true}
                        key={show.id}
                        id={show.id}
                        title={show.name}
                        poster={show.poster_path}
                        overview={show.overview}
                    />
                ))}
            </List>
        </Container>
    </ScrollContinaer>
);
