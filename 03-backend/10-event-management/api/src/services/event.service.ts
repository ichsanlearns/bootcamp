import { Prisma } from "../generated/prisma/client.js";
import { prisma } from "../lib/prisma.lib.js";

export async function create(data: Prisma.EventCreateInput) {
  return await prisma.event.create({ data });
}
