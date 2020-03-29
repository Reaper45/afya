import React from "react";
import { shallow } from "enzyme";

import Table from "components/common/Table";

it("renders table correctly", () => {
  const component = shallow(
    <Table>
      <Table.Header>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>Test Name</Table.Cell>
          <Table.Cell>Test Description</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
  expect(component).toMatchSnapshot();
});
