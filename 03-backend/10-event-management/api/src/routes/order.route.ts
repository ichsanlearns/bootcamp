import express from "express";
import {
  postNewOrder,
  putExpiredOrder,
} from "../controller/order.controller.js";
import { roleGuard, verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/").post(verifyToken, roleGuard("CUSTOMER"), postNewOrder);
router.route("/expired").put(putExpiredOrder);

export default router;
