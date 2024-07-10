import React from 'react';
import Chart from '../components/Chart';
import DataTable from '../components/DataTable';
import MetricCards from '../components/MetricCards';
import FloatingComponent from '../components/FloatingComponent';

const Dashboard = () => (
  <div>
    <h1>SALES DASHBOARD</h1>
    <MetricCards />
    <Chart />
    <DataTable />
    <FloatingComponent/>
  </div>
);

export default Dashboard;
