import axios from 'axios';
//import { REACT_APP_CLIENT_ID } from '@env';

const getAccessTokenCall = async () => {
  const tenantId =  process.env.REACT_APP_TENANT_ID;
  const url = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  console.log('clientID------>>>>', process.env.REACT_APP_CLIENT_ID);
  console.log(
    'client secret ------->>>>>',
    process.env.REACT_APP_CLIENT_SECRET,
  );
  console.log('scope ----->>>>>>>', process.env.REACT_APP_SCOPE_URL);

  const data = new URLSearchParams();
  data.append('grant_type', 'client_credentials');
  data.append('client_id', process.env.REACT_APP_CLIENT_ID);
  data.append('client_secret', process.env.REACT_APP_CLIENT_SECRET);
  data.append('scope', process.env.REACT_APP_SCOPE_URL);

  try {
    const response = await axios.post(url, data.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // Check the response status
    if (response.status !== 200) {
      throw new Error(`Failed to obtain access token: ${response.statusText}`);
    }

    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token: ', error);
    if (error.response) {
      console.log(
        'ERROR---------------->>>>>',
        error.response.data.error_description,
      );
    }
    throw error;
  }
};

export default getAccessTokenCall;
