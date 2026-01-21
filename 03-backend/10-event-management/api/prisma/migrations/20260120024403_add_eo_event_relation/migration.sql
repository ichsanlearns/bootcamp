/*
  Warnings:

  - Added the required column `eventOrganizerId` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "events" ADD COLUMN     "eventOrganizerId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_eventOrganizerId_fkey" FOREIGN KEY ("eventOrganizerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
