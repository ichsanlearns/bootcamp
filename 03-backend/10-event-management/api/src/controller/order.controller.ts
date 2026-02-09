import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/app-error.util.js";
import { cancelExpiredOrder, createOrder } from "../services/order.service.js";

export async function postNewOrder(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const eventId = req.body.eventId;

    if (!req.user || !req.user.id) {
      throw new AppError(401, "Unauthorized");
    }

    const customerId = req.user.id;

    const order = await createOrder({ customerId, eventId });

    res.status(201).json({ message: "Order craeted", data: order });
  } catch (error) {
    next(error);
  }
}

export async function putExpiredOrder(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const result = await cancelExpiredOrder();

    res
      .status(200)
      .json({ message: "Expired orders canceled", expiredCount: result.count });
  } catch (error) {
    next(error);
  }
}
