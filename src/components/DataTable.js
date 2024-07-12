import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

  const apiToken = localStorage.getItem('token');

  const axiosInstance = axios.create({
    baseURL: 'https://retailscope.net/api/v2/transactions/retail_transaction_list/cd29cf6f-215b-4941-80ab-cd0632e4048f/',
    headers: {
      'Authorization': `Bearer ${apiToken}`
    }
  });

  useEffect(() => {
    axiosInstance.get().then((response) => {
      const stock = response.data;

      // Sort transactions by created date in descending order
      const sortedStock = stock.sort((a, b) => {
        return new Date(b.created) - new Date(a.created);
      });

      console.log("all transactions " + sortedStock.length);
      const stockIn = sortedStock.filter(product => product.transaction_type === 'purchase');
      console.log('stock in ' + stockIn.length);
      
      const stockOut = sortedStock.filter(product => product.transaction_type === 'sales' || product.transaction_type === 'sale');
      console.log('stock out ' + stockOut.length);

      localStorage.setItem("allCount", sortedStock.length);
      localStorage.setItem("salesCount", stockOut.length);
      localStorage.setItem("purchaseCount", stockIn.length);
      setData(sortedStock);
    });

  }, []);

  // Function to format date string
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Adjust format as needed
  };

  return (
    <Table>
      <thead>
        <tr>
          <Th>Product Name</Th>
          <Th>Quantity</Th>
          <Th>Price</Th>
          <Th>Transaction Type</Th>
          <Th>Transaction Date</Th>
        </tr>
      </thead>
      <tbody>
        {data.slice(0, 10).map(product => (
          <tr key={product.id}>
            <Td>{product.product_name}</Td>
            <Td>{product.quantity}</Td>
            <Td>{product.price}</Td>
            <Td>{product.transaction_type}</Td>
            <Td>{formatDate(product.created)}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
