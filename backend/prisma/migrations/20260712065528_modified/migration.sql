/*
  Warnings:

  - You are about to drop the column `targetDate` on the `EnvironmentalGoal` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `EnvironmentalGoal` table. All the data in the column will be lost.
  - The `status` column on the `EnvironmentalGoal` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `currentCO2` to the `EnvironmentalGoal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deadline` to the `EnvironmentalGoal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department` to the `EnvironmentalGoal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `EnvironmentalGoal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `targetCO2` to the `EnvironmentalGoal` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "GoalStatus" AS ENUM ('ACTIVE', 'ON_TRACK', 'COMPLETED', 'OVERDUE');

-- AlterTable
ALTER TABLE "EnvironmentalGoal" DROP COLUMN "targetDate",
DROP COLUMN "title",
ADD COLUMN     "currentCO2" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "deadline" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "department" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "progress" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "targetCO2" DOUBLE PRECISION NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "GoalStatus" NOT NULL DEFAULT 'ACTIVE';
