import { google } from 'googleapis';
import { userService } from '../service/user';

const client = new google.auth.OAuth2(process.env.clientID);
const googleLogin = (req: any, res: any) => {
  const { tokenID } = req.body;
  client
    .verifyIdToken({
      idToken: tokenID,
      audience: process.env.clientID
    })
    .then(async (response: any) => {
      const { email } = response.payload;
      try {
        const user = await userService.checkUserMail(email as string);
        return res.status(200).send(user);
      } catch (e) {
        return res.status(404).send(e);
      }
    });
};

export default googleLogin;
