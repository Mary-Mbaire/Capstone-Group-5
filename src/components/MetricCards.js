import React from 'react';
import styled from 'styled-components';

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

const MetricCards = () => (
  <CardContainer>
    <Card>
      <h3>Users</h3>
      <p>1,234</p>
    </Card>
    <Card>
      <h3>Sales</h3>
      <p>$12,345</p>
    </Card>
    <Card>
      <h3>Performance</h3>
      <p>87%</p>
    </Card>
  </CardContainer>
);

export default MetricCards;
