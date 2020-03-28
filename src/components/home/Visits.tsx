import * as React from "react"

import styled from "lib/emotion";
import FilterItem from 'components/common/FilterItem';

const VisitsWrapper = styled("div")`
  background: #fff;
  border-radius: 3px;
  padding: 1em;
  background: #fff;
  height: 100%;
  > b {
    display: block;
    text-transform: uppercase;
    color: ${props => props.theme.colors.accent};
    opacity: .66;
    font-weight: bolder;
    font-size: .7rem;
  }
  button {
    width: 100%;
  }
`;

export type VisitsType = Array<{
  count: number;
  title: string;
  key: string;
}>

const Visits: React.FC<{activeVisit: string; setActiveVisit: (key: string) => void; visits: VisitsType }> = ({ activeVisit, setActiveVisit, visits }) => (
  <VisitsWrapper data-name="visit-item">
    <b>Visits</b>
    <br/>
    {
      visits.map(visit =>
      <FilterItem
        active={activeVisit === visit.key}
        onClick={() => setActiveVisit(visit.key)}
        {...visit} />
    )}
  </VisitsWrapper>
);

export default Visits;
