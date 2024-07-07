import axios from 'axios';
//import { REACT_APP_CLIENT_ID } from '@env';


const getAccessTokenCall = async () => {
  const tenantId = 'a455b827-244f-4c97-b5b4-ce5d13b4d00c'; //'a455b827-244f-4c97-b5b4-ce5d13b4d00c'; // App_ID: 06ff884d-8188-48ba-b5d3-80e5cbdb90f6
  const url = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  console.log('clientID------>>>>', process.env.REACT_APP_CLIENT_ID);
  console.log('client secret ------->>>>>', process.env.REACT_APP_CLIENT_SECRET);
  console.log('scope ----->>>>>>>', process.env.REACT_APP_SCOPE_URL);

  // const data = new URLSearchParams();
  // data.append('grant_type', "client_credentials");
  // data.append('client_id', process.env.REACT_APP_CLIENT_ID);
  // data.append('client_secret', process.env.REACT_APP_CLIENT_SECRET);
  // data.append('scope', process.env.REACT_APP_SCOPE_URL);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'User-Agent': 'PostmanRuntime/7.26.8',  
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        scope: process.env.REACT_APP_SCOPE_URL,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to obtain access token: ${response.statusText}`);
    }

    console.log(' ------------->>>>>>>>>>>>>>> RESPONSE: ', response);
    const data = await response.json();
    console.log('Access Token:', data?.access_token);
    return data.access_token;

    // const response = await axios.post(url, data, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //     },

    // });
    // console.log('>>>>>>>>>>>>>>>>>>>>>>Access token: ', response.data.access_token);
    // return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token: ', error);
    console.log(
      'ERROR---------------->>>>>',
      error.response.data.error_description,
    );
    throw error;
  }
};

export default getAccessTokenCall;
