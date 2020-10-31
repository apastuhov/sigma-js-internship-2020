import axios from 'axios';
import { dataType } from '../components/interfaces/Interface';

const urlApi = 'http://127.0.0.1:8000/api/';
const config = {
	headers: {
		'Content-Type': 'application/json'
	}
};

const filterUserDetails = async (type: dataType, id: number, data: object = {}) => {
	let res = null;
	try {
		if (Object.keys(data).length === 0 && data.constructor === Object) {
			res = await axios.get(`${urlApi}${type}${id}`);
		} else {
			res = await axios.post(`${urlApi}${type}${id}`, JSON.stringify(data), config);
		}
		return await res.data;
	} catch (e) {
		console.log(e);
	}
};


export default filterUserDetails;

