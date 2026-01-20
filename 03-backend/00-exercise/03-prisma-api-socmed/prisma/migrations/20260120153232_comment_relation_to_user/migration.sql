/*
  Warnings:

  - Added the required column `author_id` to the `comment_posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comment_posts" ADD COLUMN     "author_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "comment_posts" ADD CONSTRAINT "comment_posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
