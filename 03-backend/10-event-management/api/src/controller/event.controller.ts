import { type NextFunction, type Request, type Response } from "express";
import { create } from "../services/event.service.js";
import { createEventSchema } from "../validators/event.validator.js";
import { AppError } from "../utils/app-error.util.js";

export async function createEvent(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    if (!req.user?.id) {
      throw new AppError(401, "Unauthorized");
    }

    const validatedData = createEventSchema.parse({
      ...req.body,
      eventOrganizerId: req.user.id,
    });

    const {
      name,
      description,
      location,
      startDate,
      endDate,
      eventOrganizerId,
    } = validatedData;

    const result = await create({
      EventOrganizer: { connect: { id: eventOrganizerId } },
      name,
      description,
      location,
      startDate: startDate,
      endDate: endDate,
    });
    res.status(200).json({ message: "Event created", data: result });
  } catch (error) {
    next(error);
  }
}
