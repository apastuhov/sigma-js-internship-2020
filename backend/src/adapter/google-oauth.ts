import { google } from 'googleapis';

const client = new google.auth.OAuth2('341926743470-9blkj1v16puk169ke04vsk7qigumb8tb.apps.googleusercontent.com');
const googleLogin = (req: any, res: any) => {
  const { tokenID } = req.body;
  client
    .verifyIdToken({
      idToken: tokenID,
      audience: '341926743470-9blkj1v16puk169ke04vsk7qigumb8tb.apps.googleusercontent.com'
    })
    .then((response: any) => {
      console.log(response);
    });
};

export default googleLogin;
