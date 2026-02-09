/*
  Warnings:

  - You are about to drop the column `expiredAt` on the `orders` table. All the data in the column will be lost.
  - Added the required column `expiresAt` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "expiredAt",
ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL;
