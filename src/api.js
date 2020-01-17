import axios from 'axios';


export const api = axios.create({
    baseURL: 'http://10.181.77.232:8081/ssc-auditoria-frontend/rest',
});

export default api;