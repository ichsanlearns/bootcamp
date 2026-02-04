import { type Request, type Response } from "express";
import { create } from "../services/event.service.js";

export async function createEvent(req: Request, res: Response) {
  const { name, description, location, startDate, endDate } = req.body;
  const result = await create({
    EventOrganizer: { connect: { id: req.user!.id } },
    name,
    description,
    location,
    startDate: new Date(),
    endDate: new Date(),
  });
  res.status(200).json({ message: "Event created", data: result });
}
