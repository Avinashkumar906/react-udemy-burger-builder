import axios from 'axios';

const axiosInstance = axios.create({baseURL:'https://react-6302e-default-rtdb.firebaseio.com/'});

export default axiosInstance;