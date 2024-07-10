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
      const stock = response.data;

      console.log("all transactions " + stock.length); 

      const stockIn = stock.filter(product => product.transaction_type === 'purchase');
      console.log('stock in ' +stockIn.length);
      
      const stockOut = stock.filter(product => product.transaction_type === 'sales' ||  product.transaction_type === 'sale');
      console.log('stock out ' +stockOut.length)

      localStorage.setItem("allCount",stock.length);
      localStorage.setItem("salesCount",stockOut.length);
      localStorage.setItem("purchaseCount",stockIn.length);
      setData(stock);
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
