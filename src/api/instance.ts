import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://af7f-84-54-86-8.ngrok-free.app/api',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    "ngrok-skip-browser-warning": true
  },
});

export default instance;
