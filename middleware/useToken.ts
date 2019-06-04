import { Request, Response, NextFunction} from 'express';

import getToken from '../lib/getToken';

/**
 * Middleware to include the required authorization header
 * in the HTTP request.
 */
export default async (req: Request, _: Response, next: NextFunction) => {
  const { header } = await getToken();
  req.headers.authorization = header.authorization;
  next();
};
