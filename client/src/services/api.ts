import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const api = {
  submitApplication: (data: any) => axios.post(`${API_URL}/applications`, data),
  getApplications: () => axios.get(`${API_URL}/applications`),
  getDashboardStats: () => axios.get(`${API_URL}/dashboard/stats`)
};