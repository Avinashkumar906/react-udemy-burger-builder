import axios from 'axios';

const axiosInstance = axios.create({baseURL:'https://react-6302e-default-rtdb.firebaseio.com/udemy-react-course/'});

export default axiosInstance;