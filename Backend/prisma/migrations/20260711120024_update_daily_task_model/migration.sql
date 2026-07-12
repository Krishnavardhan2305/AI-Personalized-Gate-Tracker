/*
  Warnings:

  - You are about to drop the column `completed` on the `DailyTask` table. All the data in the column will be lost.
  - You are about to drop the column `dismissed` on the `DailyTask` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `DailyTask` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('PENDING', 'COMPLETED');

-- AlterTable
ALTER TABLE "DailyTask" DROP COLUMN "completed",
DROP COLUMN "dismissed",
DROP COLUMN "type",
ADD COLUMN     "status" "TaskStatus" NOT NULL DEFAULT 'PENDING';

-- DropEnum
DROP TYPE "TaskType";
