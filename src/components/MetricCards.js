import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchMetrics } from '../services/api';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  flex: 1;
  margin: 0 1rem;
`;

const MetricCards = () => {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    fetchMetrics().then((response) => {
      console.log("ALL SALES "+ localStorage.getItem("allRecords"))
      var details = {
        "allCount":localStorage.getItem("allRecords")
      }
      setMetrics(details);
    });
  }, []);

  return (
    <CardContainer>
      <Card>
        <h3>Total Tranasactions</h3>
        <p>{metrics.allCount}</p>
      </Card>
      <Card>
        <h3>Stock In</h3>
        <p>{metrics.id}</p>
      </Card>
      <Card>
        <h3>Stock Out</h3>
        <p>{metrics.completed ? 'Completed' : 'Pending'}</p>
      </Card>
    </CardContainer>
  );
};

export default MetricCards;
