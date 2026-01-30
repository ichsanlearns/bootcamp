import express from "express";
import {
  newPost,
  showAllPost,
  showPostById,
  changePostById,
} from "../controllers/post.controller.js";
import { createComment } from "../controllers/comment.controller.js";

const router = express.Router();

router.route("/").post(newPost).get(showAllPost);
router.route("/:id").get(showPostById).put(changePostById);
router.route("/:postId/comment/:userId").post(createComment);

export default router;
