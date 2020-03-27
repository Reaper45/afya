import React from 'react';

// Local Files
import styled from "lib/emotion";
import Nav from './Nav';
import Header from './Header';

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
  padding: 2em;
  display: block;
`;

export default function Home() {
  return (
    <HomeWrapper>
      <Nav />
      <Container>
        <Header />
        <MainWrapper />
      </Container>
    </HomeWrapper>
  );
}
