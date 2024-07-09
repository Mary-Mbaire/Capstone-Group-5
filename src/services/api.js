import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIwNjY2MDI4LCJpYXQiOjE3MjA0MjYwMjgsImp0aSI6IjFmNTI2YWUzMTJiZjRmMjlhZDExYmQzYzU0NzkzYmU2IiwidXNlcl9pZCI6IjZkMzEyNGU4LThjMzEtNGFlZi04NDk0LTQ4M2VlNGE1YmYyNSJ9.HiftxHr0A5X73p4Ud-pK3zMxzDmD_vv7eP-iTJ56S9E';

const axiosInstance = axios.create({
    baseURL: 'https://retailscope.net/api/v2/transactions/retail_transaction_list/cd29cf6f-215b-4941-80ab-cd0632e4048f/',
    headers: {
      'Authorization': `Bearer ${apiToken}`
    }
  });

export const fetchMetrics = () => {
  return axios.get(`${API_URL}/todos/1`);
};

export const fetchChartData = () => {
  return axios.get(`${API_URL}/posts`);
};

export const fetchTableData = () => {
    return axiosInstance.get();

};