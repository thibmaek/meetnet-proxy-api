import serverless from 'serverless-http';
import express from 'express';

import useToken from './middleware/useToken';

const app = express()
  .use(useToken);

app.get('/', function (req, res) {
  console.log(req);
  res.send('Hello World!')
})

export const handler = serverless(app);
