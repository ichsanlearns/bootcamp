import express from "express";
import {
  newPost,
  showAllPost,
  showPostById,
  changePostById,
} from "../controllers/post.controller.js";

const router = express.Router();

router.route("/").post(newPost).get(showAllPost);
router.route("/:id").get(showPostById).put(changePostById);
// router.route("/:id/comment/:userId");

export default router;
