import express from "express";

import {
  getAllUsers,
  createUser,
  getUserById,
  removeAll,
  removeUserById,
  updateUser,
} from "../controllers/user.controller.ts";
import { verifyToken } from "../middlewares/auth.middleware.ts";

const router = express.Router();

router
  .route("/")
  .get(getAllUsers)
  .post(verifyToken, createUser)
  .delete(verifyToken, removeAll);
router
  .route("/:id")
  .get(getUserById)
  .put(verifyToken, updateUser)
  .delete(verifyToken, removeUserById);

export default router;
