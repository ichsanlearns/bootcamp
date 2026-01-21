import { type Request, type Response } from "express";
export declare function getAllUsers(req: Request, res: Response): Promise<void>;
export declare function getUserById(req: Request, res: Response): Promise<void>;
export declare function updateUser(req: Request, res: Response): Promise<void>;
export declare function softDeleteUserById(req: Request, res: Response): Promise<void>;
export declare function hardDeleteUserById(req: Request, res: Response): Promise<void>;
export declare function softDeleteAllUser(req: Request, res: Response): Promise<void>;
export declare function hardDeleteAllUser(req: Request, res: Response): Promise<void>;
//# sourceMappingURL=user.controller.d.ts.map