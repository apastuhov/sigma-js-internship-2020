import axios from 'axios';
import { dataType } from '../components/interfaces/Interface';

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
axios.defaults.headers = { 'Content-Type': 'application/json' };

const apiService = async (type: dataType, data: object = {}) => {
  let res = null;
  try {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res = await axios.get(`/${type}`);
    } else {
      res = await axios.post(`/${type}`, JSON.stringify(data), axios.defaults.headers);
    }
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getRequest = (url: string) => axios.get(`${url}`).then(res => res.data);

export const postRequest = (url: string, body: any) => {
  return axios
    .post(`${url}`, body)
    .then(res => res.data)
    .catch(e => e);
};

export default apiService;
