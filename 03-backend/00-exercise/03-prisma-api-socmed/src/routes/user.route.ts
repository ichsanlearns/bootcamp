import express from "express";
import { allUsers, getUserById } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/users").get(allUsers);
router.route("/users/:id").get(getUserById);

export default router;
