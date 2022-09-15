/*
  Warnings:

  - You are about to drop the column `createdAt` on the `physical_persons` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "physical_persons" DROP COLUMN "createdAt";

-- CreateTable
CREATE TABLE "investiment_funds" (
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "investiment_funds_pkey" PRIMARY KEY ("userId")
);

-- AddForeignKey
ALTER TABLE "investiment_funds" ADD CONSTRAINT "investiment_funds_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
