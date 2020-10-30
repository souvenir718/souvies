import React from "react";
import HorizontalSlider from "../../components/HorizontalSlider";
import ScrollContinaer from "../../components/ScrollContainer";
import Vertical from "../../components/Vertical";
import styled from "styled-components/native";
import Horizontal from "../../components/Horizontal";
import List from "../../components/List";

const Container = styled.View`
    margin-top: 30px;
`;

export default ({ loading, popular, topRated, today }) => (
    <ScrollContinaer loading={loading}>
        <Container>
            <HorizontalSlider title={"Popular Show"}>
                {popular.map((show) => (
                    <Vertical
                        key={show.id}
                        id={show.id}
                        poster={show.poster_path}
                        title={show.name}
                        votes={show.vote_average}
                    />
                ))}
            </HorizontalSlider>

            <HorizontalSlider title={"Top Rated"}>
                {topRated.map((show) => (
                    <Vertical
                        key={show.id}
                        id={show.id}
                        poster={show.poster_path}
                        title={show.name}
                        votes={show.vote_average}
                    />
                ))}
            </HorizontalSlider>
            <List title="Airing Todya">
                {today.map((show) => (
                    <Horizontal
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
