import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/user/';

export const getFriends = async (id: string) => {
  try {
    const res = await axios.get(`/${id}/friends`);
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

//TODO add friend
// export const addFriend = async () => {
// };
