import express from "express";
import { register } from "../controller/auth.controller.js";
const router = express.Router();
router.route("/register").post(register);
router.route("/login");
router.route("/logout");
router.route("/forget");
export default router;
//# sourceMappingURL=auth.route.js.map