// services/axiosConfig.js
import axios from 'axios';

axios.defaults.withCredentials = true;

export const fetchCSRFToken = async () => {
    const response = await axios.get('/api/csrf/');
    axios.defaults.headers.post['X-CSRFToken'] = response.data.csrfToken;
};
