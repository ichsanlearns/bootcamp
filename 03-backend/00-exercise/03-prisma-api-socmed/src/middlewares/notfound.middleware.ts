import { type Request, type Response, type NextFunction } from "express";
import { AppError } from "../utils/error.util.js";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  next(
    new AppError(
      `Route ${req.method} ${req.originalUrl} does not exist on this server`,
      404,
    ),
  );
};
