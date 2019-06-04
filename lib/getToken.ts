import got from 'got';
import { URLSearchParams } from 'url';

const tokenPayload = new URLSearchParams({
  grant_type: 'password',
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
}).toString();

/**
 * Function to fetch an auth token from Meetnet's API
 * which we use in the middleware to authenticate our requests
 */
const getToken = async () => {
  try {
    const { body } = await got('', {
      baseUrl: 'https://api.meetnetvlaamsebanken.be/Token',
      method: 'POST',
      body: tokenPayload,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    });

    const { access_token, expires_in, token_type } = JSON.parse(body);

    return {
      access_token,
      expires_in,
      header: {
        authorization: `${token_type} ${access_token}`
      }
    };
  } catch (error) {
    console.error('Could not retrieve a token:', error)
    throw error;
  }
};

export default getToken;
