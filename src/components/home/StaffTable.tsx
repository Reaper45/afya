import React from "react";

import styled from "lib/emotion";
import { getState } from "utils";

import Table from "components/common/Table";
import Progress from "components/common/Progress";

type Delta = {
  value: string;
  delta: string;
};

export type StaffType = {
  id: string;
  name: string;
  efficiencyDelta: Delta;
  npsDelta: Delta;
  efficiency: number; // 1 - 100
  issues: number; // 1 - 10
};

const Delta = styled("span")<{ state?: "positive" | "negative" }>`
  span {
    opacity: 0.33;
  }
  margin-left: 1em;
  :after {
    display: inline-block;
    content: "";
    border: solid 7px transparent;
    border-left-width: 5px;
    border-right-width: 5px;
    ${(props) =>
      props.state === "positive" &&
      `border-bottom-color: ${props.theme.colors[props.state]}`};
    ${(props) =>
      props.state === "negative" &&
      `border-top-color: ${props.theme.colors[props.state]}`};
    width: 0px;
    height: 0px;
    margin-left: 1em;
    margin-bottom: ${(props) => (props.state === "positive" ? "0" : "-7px")};
  }
`;

const StaffTable: React.FC<{ staffs: Array<StaffType> }> = ({ staffs }) => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nº</Table.HeaderCell>
          <Table.HeaderCell>Staff Name</Table.HeaderCell>
          <Table.HeaderCell>Efficiency Delta</Table.HeaderCell>
          <Table.HeaderCell>NPS Delta</Table.HeaderCell>
          <Table.HeaderCell>Efficiency</Table.HeaderCell>
          <Table.HeaderCell>Reported Issues</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {staffs.map((staff) => (
          <Table.Row key={staff.id}>
            <Table.Cell collapsing light>
              {staff.id}
            </Table.Cell>
            <Table.Cell collapsing>{staff.name}</Table.Cell>
            <Table.Cell>
              {staff.efficiencyDelta.value}{" "}
              <Delta state={getState(staff.efficiencyDelta.delta)}>
                <span>{staff.efficiencyDelta.delta}</span>
              </Delta>
            </Table.Cell>
            <Table.Cell>
              {staff.npsDelta.value}{" "}
              <Delta state={getState(staff.efficiencyDelta.delta)}>
                <span>{staff.npsDelta.delta}</span>
              </Delta>
            </Table.Cell>
            <Table.Cell>
              <Progress
                inline
                progress={staff.efficiency}
                content={staff.efficiency.toString()}
                gradient
              />
            </Table.Cell>
            <Table.Cell>
              <Progress
                inline
                progress={staff.issues * 10}
                content={staff.issues.toString()}
                gradient
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default StaffTable;
