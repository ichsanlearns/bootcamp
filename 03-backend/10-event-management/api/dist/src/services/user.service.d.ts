import { Role } from "../generated/prisma/enums.js";
interface IUpdateUserInput {
    name?: string;
    email?: string;
    password?: string;
}
export declare function getAll(query: {
    page?: number;
    limit?: number;
}): Promise<{
    data: {
        name: string;
        email: string;
        role: Role;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
    }[];
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
}>;
export declare function getById(id: number, role: Role): Promise<({
    Orders: {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        customerId: number;
        eventId: number;
    }[];
} & {
    name: string;
    email: string;
    password: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    id: number;
}) | ({
    Events: {
        name: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        id: number;
        eventOrganizerId: number;
        description: string;
        location: string;
        startDate: Date;
        endDate: Date;
    }[];
} & {
    name: string;
    email: string;
    password: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    id: number;
}) | null | undefined>;
export declare function update(id: number, data: IUpdateUserInput): Promise<{
    name: string;
    email: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    id: number;
}>;
export declare function softDeleteById(id: number): Promise<{
    name: string;
    email: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    id: number;
}>;
export declare function hardDeleteById(id: number): Promise<{
    name: string;
    email: string;
    password: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    id: number;
}>;
export declare function softDeleteAll(): Promise<{
    affectedRows: number;
}>;
export declare function hardDeleteAll(): Promise<{
    affectedRows: number;
}>;
export {};
//# sourceMappingURL=user.service.d.ts.map