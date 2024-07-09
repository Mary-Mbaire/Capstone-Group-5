import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchTableData } from '../services/api';

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

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchTableData().then((response) => {
      const objects = response.data;
      console.log(objects.length); 
      localStorage.setItem("allRecords",objects.length);
      setData(objects);
    });
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <Th>Product Name </Th>
          <Th>Quantity</Th>
          <Th>Price</Th>
          <Th>Transaction Type</Th>
          <Th>Transaction Date</Th>
        </tr>
      </thead>
      <tbody>
        {data.map(product => (
          <tr key={product.id}>
            <Td>{product.product_name}</Td>
            <Td>{product.quantity}</Td>
            <Td>{product.price}</Td>
            <Td>{product.transaction_type}</Td>
            <Td>{product.created}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
