import React from 'react';
import { useState } from "react";

// Local Files
import styled from "lib/emotion";
import Nav from './Nav';
import Header from './Header';
import Visits, { VisitsType } from './Visits';

const HomeWrapper = styled("div")`
  display: flex;
  height: 100%;
`;

const Container = styled("div")`
  flex-grow: 1;
`;

const MainWrapper = styled("main")`
  display: flex;
  background: ${props => props.theme.colors.light};
  padding: 2em 4em 0;
  display: block;
  min-height: calc(100% - 88px);
  box-sizing: border-box;
`;

const Title = styled("div")`
  font-size: 1.7em;
  font-weight: 600;
  margin-bottom: 1em;
`;

const Grid = styled("div")`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

const hospitalVisits: VisitsType = [
  {count: 7, title: "Kiambiu", key: "1" },
  {count: 12, title: "Mkuru Kwa Ruben", key: "2" },
  {count: 26, title: "Mkuru Kwa Njenga", key: "3" },
  {count: 38, title: "Baba dogo", key: "4" },
  {count: 41, title: "Kosovo", key: "5" },
  {count: 24, title: "Mukuru Kayaba", key: "6" },
]

export default function Home() {
  const [activeVisit, setActiveVisit] = useState("1");
  return (
    <HomeWrapper>
      <Nav />
      <Container>
        <Header />
        <MainWrapper>
          <Title>Analytics</Title>
          <Grid>
            <Visits activeVisit={activeVisit} visits={hospitalVisits} setActiveVisit={setActiveVisit} />
          </Grid>
        </MainWrapper>
      </Container>
    </HomeWrapper>
  );
}
