import got from 'got';

/**
 * Base networking helper to send HTTP requests to Meetnet's API v2
 * Based on node_modules/got
 */
const fetch = async (path = '', options = {}) => {
  return got(`${path}`, {
    baseUrl: 'https://api.meetnetvlaamsebanken.be/V2',
    json: true,
    ...options,
  });
};

export default fetch;
