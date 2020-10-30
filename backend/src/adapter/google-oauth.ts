import { google } from 'googleapis';

const client = new google.auth.OAuth2(process.env.clientID);
const googleLogin = (req: any, res: any) => {
  const { tokenID } = req.body;
  client
    .verifyIdToken({
      idToken: tokenID,
      audience: process.env.clientID
    })
    .then((response: any) => {
      const { given_name, family_name, email } = response.payload;

      console.log(given_name, family_name, email);
    });
};

export default googleLogin;
