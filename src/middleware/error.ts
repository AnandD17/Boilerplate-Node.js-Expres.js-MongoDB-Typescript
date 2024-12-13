import mongoose from 'mongoose';
import httpStatus from 'http-status';
// import config from '../config/config';
// import logger from '../config/logger';
import ApiError from '../utils/ApiError';
import { Request, Response, NextFunction } from 'express';

// Error Converter Middleware
export const errorConverter = (err: any, req: Request, res: Response, next: NextFunction): void => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode] as string;
    error = new ApiError(statusCode, message, false, err.stack);
  }
  next(error);
};

// Error Handler Middleware
export const errorHandler = (err: ApiError, req: Request, res: Response, next: NextFunction): void => {
  let { statusCode, message } = err;
//   if (config.env === 'production' && !err.isOperational) {
//     statusCode = httpStatus.INTERNAL_SERVER_ERROR;
//     message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR] as string;
//   }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    // ...(config.env === 'development' && { stack: err.stack }),
  };

//   if (config.env === 'development') {
//     logger.error(err);
//   }

  res.status(statusCode).send(response);
};
