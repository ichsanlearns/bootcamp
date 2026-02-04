import type { JwtPayload } from "jsonwebtoken";
import type { Role } from "../generated/prisma/enums.js";

export interface CustomJWTPayload extends JwtPayload {
  id: number;
  email: string;
  role: Role;
}

declare global {
  namespace Express {
    interface Request {
      user?: CustomJWTPayload;
    }
  }
}
