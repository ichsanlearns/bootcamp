import express from "express";
import { upload } from "../middleware/upload.middleware.js";
import {
  postArrayImages,
  postSingleImage,
  postFieldsImages,
} from "../controller/image.controller.js";

const router = express.Router();
router.route("/single").post(upload.single("singleImage"), postSingleImage);
router.route("/array").post(upload.array("arrayImage"), postArrayImages);
router.route("/fields").post(
  upload.fields([
    { name: "thumbnail", maxCount: 2 },
    { name: "featured", maxCount: 3 },
  ]),
  postFieldsImages,
);

export default router;

/* ---------------------------------- NOTES --------------------------------- */
/*
    util -> throw errow
    service -> rethrow error
    controller -> catch -> error middleware
*/
