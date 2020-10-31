import axios from 'axios';
import { dataType } from '../components/interfaces/Interface';

const urlApi = 'http://127.0.0.1:8000/api/user/';
const config = {
	headers: {
		'Content-Type': 'application/json'
	}
};

const filterUserPosts = async (id: number, type: dataType, data: object = {}) => {
	let res = null;
	try {
		if (Object.keys(data).length === 0 && data.constructor === Object) {
			res = await axios.get(`${urlApi}${id}${type}`);
		} else {
			res = await axios.post(`${urlApi}${id}${type}`, JSON.stringify(data), config);
		}
		return await res.data;
	} catch (e) {
		console.log(e);
	}
};

export default filterUserPosts;

