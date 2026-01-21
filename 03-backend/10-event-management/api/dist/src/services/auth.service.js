import { Role } from "../generated/prisma/enums.js";
import { prisma } from "../lib/prisma.lib.js";
export async function create(userData) {
    await prisma.user.create({
        data: {
            name: userData.name,
            email: userData.email,
            password: userData.password,
            role: userData.role,
        },
    });
}
//# sourceMappingURL=auth.service.js.map