import express from "express";
import { login, register } from "../controller/auth.controller.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout");
router.route("/forget");

export default router;
