import express from "express";
import { upload } from "../middleware/upload.middleware.js";
import {
  uploadArrayController,
  uploadSingleController,
} from "../controller/image.controller.js";

const router = express.Router();
router
  .route("/single")
  .post(upload.single("singleImage"), uploadSingleController);
router.route("/array").post(upload.array("arrayImage"), uploadArrayController);

export default router;
