import { z } from "zod";

export const createEventSchema = z.object({
  name: z.string().min(3, "Event must be at least 3 characters"),
  description: z.string().min(10, "Description too short"),
  location: z.string().min(10),
  startDate: z.date("Invalid date format"),
  endDate: z.date("Invalid date format"),
  eventOrganizerId: z.number().min(1),
});
