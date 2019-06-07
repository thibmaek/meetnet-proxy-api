import got from 'got';
import { Request } from 'express';

/**
 * Base networking helper to proxy original HTTP requests to Meetnet's API v2
 * Based on node_modules/got with the auth header automatically included via
 * the express middleware
 */
const proxy = async (request: Request, options = {}) => {
  const { body } = await got(request.url, {
    baseUrl: 'https://api.meetnetvlaamsebanken.be/V2',
    json: true,
    headers: {
      authorization: request.headers.authorization,
    },
    ...options,
  });

  return body;
};

export default proxy;
