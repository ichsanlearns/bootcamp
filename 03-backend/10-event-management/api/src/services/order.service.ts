import { OrderStatus } from "../generated/prisma/enums.js";
import { prisma } from "../lib/prisma.lib.js";

export async function createOrder(data: {
  customerId: number;
  eventId: number;
}) {
  return prisma.order.create({
    data: {
      customerId: data.customerId,
      eventId: data.eventId,
      expiresAt: new Date(Date.now() + 1000 * 10),
    },
  });
}

export async function cancelExpiredOrder() {
  return prisma.order.updateMany({
    where: {
      expiresAt: { lte: new Date() },
      status: OrderStatus.WAITING_PAYMENT,
    },
    data: { status: OrderStatus.EXPIRED },
  });
}
