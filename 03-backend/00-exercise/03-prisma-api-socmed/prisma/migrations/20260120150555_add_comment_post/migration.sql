-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "total_comment" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "comment_posts" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,

    CONSTRAINT "comment_posts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "comment_posts" ADD CONSTRAINT "comment_posts_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
