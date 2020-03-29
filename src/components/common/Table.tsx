import * as React from 'react'

import styled from "lib/emotion";

const TableWrapper = styled("table")`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;

const TableHeader = styled("thead")`
  font-size: .8rem;
`;

const TableHeaderCell = styled("th")`
  border-bottom: solid 1px ${props => props.theme.colors.grey};
  padding: 1.5rem;
`;

const TableBody = styled("tbody")`

`;

const TableRow = styled("tr")``;

const TableCell = styled("td")<{ collapsing?: boolean; light?: boolean }>`
  padding: 1rem 1.5rem;
  font-size: 0.8rem;
  ${props =>
    props.collapsing &&
    `
    width: 1px;
    white-space: nowrap;
  `}
  ${props =>
    props.light &&
    `
    opacity: .33;
  `}
`;

const TableFooter = styled("tfoot")``;

interface TableTypeComponent extends React.FC {
  Body: typeof TableBody
  Cell: typeof TableCell
  Footer: typeof TableFooter
  Header: typeof TableHeader
  HeaderCell: typeof TableHeaderCell
  Row: typeof TableRow
}

/**
 * A table displays a collections of data grouped into rows.
 */
const Table: TableTypeComponent = ({ children }) => {
  return <TableWrapper>{children}</TableWrapper>;
};

Table.Header = TableHeader;

Table.HeaderCell = TableHeaderCell;
  
Table.Body = TableBody;

Table.Row = TableRow;

Table.Cell = TableCell;

Table.Footer = TableFooter;

export default Table ;
