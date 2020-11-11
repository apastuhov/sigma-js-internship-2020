import axios from 'axios';

export const getUserChats = () => axios.get('https://randomuser.me/api/?results=20').then(res => res.data.results);
