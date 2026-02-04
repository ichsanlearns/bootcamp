import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import type { Role } from "../generated/prisma/enums.js";

import type { CustomJWTPayload } from "../types/express.type.js";

export async function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  const payload = jwt.verify(
    token,
    process.env.JWT_SECRET!,
  ) as CustomJWTPayload;

  req.user = payload;

  next();
}

export function roleGuard(...roles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const role = req.user!.role;

    if (!role) {
      return res.status(401).json({ message: "Please login first" });
    }

    if (!roles.includes(role)) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
}
