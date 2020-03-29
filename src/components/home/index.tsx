import React from 'react';
import { useState } from "react";

// Local Files
import styled from "lib/emotion";
import Nav from './Nav';
import Header from './Header';
import SectionTitle from 'components/common/SectionTitle';
import SectionWrapper from 'components/common/SectionWrapper';
import FilterItem from 'components/common/FilterItem';
import Button, { ButtonGroup } from 'components/common/Button';
import { calenderIcon } from 'components/common/Icon';

const HomeWrapper = styled("div")`
  display: flex;
  height: 100%;
`;

const Container = styled("div")`
  flex-grow: 1;
  margin-left: 89px;
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
  grid-gap: 1.5em;
  grid-auto-rows: minmax(100px, auto);
`;

const Visits = styled(SectionWrapper)`
  height: 100%;
  grid-row: 1 / 6;
  button {
    width: 100%;
  }
`;

const Issues = styled(SectionWrapper)`
  grid-column: 2 / 5;
  grid-row: 1 / 2;
  > div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  button {
    margin-right: 1em;
    min-width: 200px;
  }
`;

const MonitoringPeriod = styled(SectionWrapper)`
  grid-column: 2 / 5;
  // grid-row: 1 / 2;
`;

const hospitalVisits: Array<{
  count: number;
  title: string;
  key: string;
}> = [
  { count: 7, title: "Kiambiu", key: "1" },
  { count: 12, title: "Mkuru Kwa Ruben", key: "2" },
  { count: 26, title: "Mkuru Kwa Njenga", key: "3" },
  { count: 38, title: "Baba Dogo", key: "4" },
  { count: 41, title: "Kosovo", key: "5" },
  { count: 24, title: "Mukuru Kayaba", key: "6" }
];

const issues: Array<{
  town: string;
  issue: string;
  key: string;
}> = [
  { town: "Kosovo", issue: "Wrong Prescription", key: "1" },
  { town: "Kiambiu", issue: "Opened Late", key: "2" },
  { town: "New York", issue: "Bad Receipt", key: "3" },
  { town: "Mathare", issue: "Late check In", key: "4" },
  { town: "Kiambiu", issue: "Delay in Lab", key: "5" },
  { town: "Kiambiu", issue: "Careless Waste distribution", key: "6" }
];

const timeFilters: Array<{ label: string; value: string }> = [
  { label: "Day", value: "day" },
  { label: "Week", value: "week" },
  { label: "Month", value: "month" },
  { label: "Year", value: "year" }
];

export default function Home() {
  const [activeVisit, setActiveVisit] = useState("1");
  const [activeIssue, setActiveIssue] = useState("2");
  const [activeTimeFilter, setTimeFilter] = useState("month");
  return (
    <HomeWrapper>
      <Nav />
      <Container>
        <Header />
        <MainWrapper>
          <Title>Analytics</Title>
          <Grid>
            <Visits data-name="visit-items">
              <SectionTitle>Visits</SectionTitle>
              <br />
              {hospitalVisits.map(visit => (
                <FilterItem
                  active={activeVisit === visit.key}
                  onClick={() => setActiveVisit(visit.key)}
                  {...visit}
                />
              ))}
            </Visits>
            <Issues data-name="issues">
              <SectionTitle>Key Issues</SectionTitle>
              <br />
              <div>
                {issues.map(issue => (
                  <FilterItem
                    outline
                    active={issue.key === activeIssue}
                    onClick={() => setActiveIssue(issue.key)}
                    description={issue.town}
                    title={issue.issue}
                    key={issue.key}
                  />
                ))}
              </div>
            </Issues>
            <MonitoringPeriod data-name="monitoring-period">
              <SectionTitle>Monitoring Period</SectionTitle>
              <br />
              <div>
                <ButtonGroup inline>
                  {timeFilters.map(time => (
                    <Button
                      key={time.value}
                      active={time.value === activeTimeFilter}
                      onClick={() => setTimeFilter(time.value)}
                    >
                      {time.label}
                    </Button>
                  ))}
                </ButtonGroup>
                <Button active icon={calenderIcon}>10 Dec 2019 - 10 Jan 2020</Button>
              </div>
            </MonitoringPeriod>
          </Grid>
        </MainWrapper>
      </Container>
    </HomeWrapper>
  );
}
