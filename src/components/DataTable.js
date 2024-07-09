import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background: #34495e;
  color: #fff;
  padding: 0.5rem;
`;

const Td = styled.td`
  padding: 0.5rem;
  border: 1px solid #ddd;
`;

const DataTable = () => (
  <Table>
    <thead>
      <tr>
        <Th>Name</Th>
        <Th>Age</Th>
        <Th>Address</Th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <Td>John Doe</Td>
        <Td>25</Td>
        <Td>1234 Main St</Td>
      </tr>
      {/* More rows... */}
    </tbody>
  </Table>
);

export default DataTable;
