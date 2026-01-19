import express from "express";
import {
  newPost,
  showAllPost,
  showPostById,
  changePostById,
} from "../controllers/post.controller.js";

const router = express.Router();

router.route("/").post(newPost);
router.route("/").get(showAllPost);
router.route("/:id").get(showPostById);
router.route("/:id").put(changePostById);

export default router;
