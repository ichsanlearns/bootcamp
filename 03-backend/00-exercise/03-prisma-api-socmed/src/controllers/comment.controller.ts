import { type Request, type Response } from "express";

import { catchAsync } from "../utils/catchAsync.util.js";
import { AppError } from "../utils/error.util.js";
import { create } from "../services/comment.service.js";

export const createComment = catchAsync(async (req: Request, res: Response) => {
  const { message } = req.body;
  const postId = req.params.postId;
  const userId = req.params.userId;

  if (!message) {
    throw new AppError("Missing required Fields", 400);
  }

  if (!postId) {
    throw new AppError("Invalid postId parameter: must be a valid postId", 400);
  }

  if (Array.isArray(postId)) {
    throw new AppError(
      "Invalid postId: expected a single value, not an array",
      400,
    );
  }

  if (!userId) {
    throw new AppError("Invalid userId parameter: must be a valid userId", 400);
  }

  if (Array.isArray(userId) || userId === undefined) {
    throw new AppError(
      "Invalid postId: expected a single value, not an array or undefined",
      400,
    );
  }

  await create(message, postId, userId);

  res.status(201).json({ message: "Comment created" });
});
