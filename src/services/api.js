import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

const apiToken =  localStorage.getItem('token');
console.log('API Toke==================================================' +apiToken)

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