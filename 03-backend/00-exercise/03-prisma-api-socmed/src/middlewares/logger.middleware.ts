import { type Request, type Response, type NextFunction } from "express";

export const loggerMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    console.log(
      `[${new Date().toISOString()}, ${request.ip}] ${request.method} ${
        request.url
      }`,
    );
    next();
  } catch (err: any) {
    response.status(500).json({ error: err.message });
  }
};
