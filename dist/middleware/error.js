"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.errorConverter = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const http_status_1 = __importDefault(require("http-status"));
// import config from '../config/config';
// import logger from '../config/logger';
const ApiError_1 = __importDefault(require("../utils/ApiError"));
// Error Converter Middleware
const errorConverter = (err, req, res, next) => {
    let error = err;
    if (!(error instanceof ApiError_1.default)) {
        const statusCode = error.statusCode || error instanceof mongoose_1.default.Error ? http_status_1.default.BAD_REQUEST : http_status_1.default.INTERNAL_SERVER_ERROR;
        const message = error.message || http_status_1.default[statusCode];
        error = new ApiError_1.default(statusCode, message, false, err.stack);
    }
    next(error);
};
exports.errorConverter = errorConverter;
// Error Handler Middleware
const errorHandler = (err, req, res, next) => {
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
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.js.map