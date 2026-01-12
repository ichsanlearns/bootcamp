import { type Request, type Response, type NextFunction } from "express";

export async function verifyToken(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return response.status(401).json({ message: "Authorization is missing" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return response.status(401).json({ message: "Token is missing" });
  }

  if (token !== "secretToken123") {
    return response.status(401).json({ message: "Invalid token" });
  }

  next();
}
