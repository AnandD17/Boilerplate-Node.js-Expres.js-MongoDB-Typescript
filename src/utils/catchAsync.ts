import { Request, Response } from "express";

const catchAsync = (fn : Function) => (req:Request, res:Response, next:Function) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
  
export default catchAsync;