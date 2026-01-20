import { prisma } from "../lib/prisma.lib.js";
import * as commentRepositories from "../repositories/comment.repository.js";
import * as postRepositories from "../repositories/post.repository.js";
import * as userRepositories from "../repositories/user.repository.js";
import { AppError } from "../utils/error.util.js";

export async function create(message: string, postId: string, userId: string) {
  if (!(await postRepositories.existsById(postId))) {
    throw new AppError("Post not found", 404);
  }

  if (!(await userRepositories.existsById(userId))) {
    throw new AppError("Wrong userId", 404);
  }

  await prisma.$transaction([
    commentRepositories.createComment({ message, postId, userId }),
    postRepositories.increaseCommentCount(postId),
  ]);
}
