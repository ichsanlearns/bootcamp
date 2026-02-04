import express from "express";

import { createEvent } from "../controller/event.controller.js";
import { roleGuard, verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/").post(verifyToken, roleGuard("EVENT_ORGANIZER"), createEvent);

export default router;
