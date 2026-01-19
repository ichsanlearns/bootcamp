import express from "express";
import {
  newPost,
  showAllPost,
  showPostById,
} from "../controllers/post.controller.js";

const router = express.Router();

router.route("/").post(newPost);
router.route("/").get(showAllPost);
router.route("/:id").get(showPostById);

export default router;
