import axios from 'axios';
import { dataType } from '../components/interfaces/Interface';

const urlApi = 'http://127.0.0.1:8000/api/';
const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const apiService = async (type: dataType, data: object = {}) => {
  let res = null;
  try {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res = await axios.get(`${urlApi}${type}`);
    } else {
      res = await axios.post(`${urlApi}${type}`, JSON.stringify(data), config);
    }
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

export default apiService;
