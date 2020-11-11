import axios from 'axios';

// TODO: delete
export const getUserChats = () => axios.get('https://randomuser.me/api/?results=20').then(res => res.data.results);
