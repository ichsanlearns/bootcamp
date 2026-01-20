import { Role } from "../generated/prisma/enums.js";
import { prisma } from "../lib/prisma.lib.js";

interface IUpdateUserInput {
  name?: string;
  email?: string;
  password?: string;
}

function assertId(id: number) {
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Invalid user id");
  }
}

async function assertUser(id: number) {
  const user = await prisma.user.findUnique({ where: { id } });

  if (!user || user.deletedAt) {
    throw new Error("User not found");
  }
}

export async function getAll(query: { page?: number; limit?: number }) {
  const page = Math.max(Number(query.page) || 1, 1);
  const limit = Math.min(Math.max(Number(query.limit) || 10, 1), 10);
  const skip = (page - 1) * limit;

  const result = await prisma.user.findMany({
    where: { deletedAt: null },
    omit: { password: true },
    skip,
    take: limit,
    orderBy: { createdAt: "desc" },
  });

  const total = await prisma.user.count({ where: { deletedAt: null } });

  return {
    data: result,
    page,
    limit,
    totalItems: total,
    totalPages: Math.ceil(total / limit),
  };
}

export async function getById(id: number, role: Role) {
  let result;

  if (role === "CUSTOMER") {
    result = await prisma.user.findUnique({
      where: { id, deletedAt: null },
      include: { Orders: true },
    });
  } else if (role === "EVENT_ORGANIZER") {
    result = await prisma.user.findUnique({
      where: { id, deletedAt: null },
      include: { Events: true },
    });
  }
  return result;
}

export async function update(id: number, data: IUpdateUserInput) {
  assertId(id);

  if (!data || Object.keys(data).length === 0) {
    throw new Error("No data provided for update");
  }

  try {
    assertUser(id);

    const result = await prisma.user.update({
      where: { id },
      data: data,
      omit: { password: true },
    });

    return result;
  } catch (error) {
    throw error instanceof Error ? error : new Error("Failed to update user");
  }
}

export async function softDeleteById(id: number) {
  assertId(id);

  try {
    assertUser(id);
    const result = await prisma.user.update({
      where: { id },
      data: { deletedAt: new Date() },
      omit: { password: true },
    });

    return result;
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error("Failed to soft delete user");
  }
}

export async function hardDeleteById(id: number) {
  assertId(id);

  try {
    // assertUser(id);
    await prisma.user.findUniqueOrThrow({
      where: { id },
    });
    const result = await prisma.user.delete({ where: { id } });
    return result;
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error("Failed to hard delete user");
  }
}

export async function softDeleteAll() {
  try {
    const result = await prisma.user.updateMany({
      where: { deletedAt: null },
      data: { deletedAt: new Date() },
    });

    return { affectedRows: result.count };
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error("Failed to soft delete all user");
  }
}

export async function hardDeleteAll() {
  try {
    const result = await prisma.user.deleteMany();

    return { affectedRows: result.count };
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error("Failed to hard delete user");
  }
}
