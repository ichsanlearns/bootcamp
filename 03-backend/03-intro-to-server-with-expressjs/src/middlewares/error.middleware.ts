import type { Request, Response, NextFunction } from "express";

export async function notFound(request: Request, response: Response) {
  response
    .status(404)
    .json({ message: "The root you're looking for does not exist" });
}

export async function error(
  error: unknown,
  request: Request,
  response: Response,
  next: NextFunction
) {
  response.status(500).json({ message: error.message });
}
