import * as React from 'react'

import styled from "lib/emotion";

const TableWrapper = styled("table")``;

const TableHeader = styled("thead")``;

const TableHeaderCell = styled("th")``;

const TableBody = styled("tbody")``;

const TableRow = styled("tr")``;

const TableCell = styled("td")``;

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
