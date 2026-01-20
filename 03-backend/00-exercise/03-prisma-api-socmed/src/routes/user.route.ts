import express from "express";
import {
  allUsers,
  getUserById,
  showUserPost,
  changeUserById,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(allUsers);
router.route("/:id").get(getUserById).put(changeUserById);
router.route("/:id/posts").get(showUserPost);

export default router;
