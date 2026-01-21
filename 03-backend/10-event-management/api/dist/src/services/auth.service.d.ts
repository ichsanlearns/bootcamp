import { Role } from "../generated/prisma/enums.js";
interface IuserData {
    name: string;
    email: string;
    password: string;
    role: Role;
}
export declare function create(userData: IuserData): Promise<void>;
export {};
//# sourceMappingURL=auth.service.d.ts.map