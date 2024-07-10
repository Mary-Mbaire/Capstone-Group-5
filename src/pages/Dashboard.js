import React from 'react';
import Chart from '../components/Chart';
import DataTable from '../components/DataTable';
import MetricCards from '../components/MetricCards';

const Dashboard = () => (
  <div>
    <h1>Sales</h1>
    <MetricCards />
    <Chart />
    <DataTable />
  </div>
);

export default Dashboard;
