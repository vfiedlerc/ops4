
import Axios from 'axios';

const axiosInstance = Axios.create({
 baseURL: 'https://testenv.backend.planhero.de/api/'

 
});




export default axiosInstance;