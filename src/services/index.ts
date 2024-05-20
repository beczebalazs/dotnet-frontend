import axios from 'axios';

const httpClient = axios.create({ baseURL: "http://localhost:5074/" });

export { httpClient };
