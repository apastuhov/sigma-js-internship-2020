import { RequestHandler } from 'express';
import { FRONTEND_SERVER_FOR_CORS } from '../constant';

export const corsMiddleware: RequestHandler = function (req, res, next) {
  // the domain you will make the request from
  res.header('Access-Control-Allow-Origin', FRONTEND_SERVER_FOR_CORS);

  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  next();
};
