import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/user/';

export const getFriends = async () => {
  const friendsAPIurl = document.location.pathname.match(/user\/[0-9a-f]{24}\/friends/);
  const userId = friendsAPIurl ? friendsAPIurl[0].split('/')[1] : null;
  if (userId) {
    try {
      const res = await axios.get(`/${userId}/friends`);
      return await res.data[0].friends;
    } catch (e) {
      console.log(e);
    }
  } else return [];
};

//TODO add friend
// export const addFriend = async () => {
// };
