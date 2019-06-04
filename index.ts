import serverless from 'serverless-http';
import express from 'express';

import useToken from './middleware/useToken';
import proxy from './lib/proxy';

const app = express()
  .use(useToken);

/**
 * Proxy all requests directly to Meetnet:
 * GET http://localhost:3000/currentData -> https://api.meetnetvlaamsebanken.be/V2/currentData
 */
app.get('/*', async function (req, res, next) {
  try {
    const apiResponse = await proxy(req);
    res.json(apiResponse);
  } catch (error) {
    next();
  }
});

export const handler = serverless(app);
