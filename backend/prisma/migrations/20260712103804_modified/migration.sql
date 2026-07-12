/*
  Warnings:

  - A unique constraint covering the columns `[employeeId,activityId]` on the table `EmployeeParticipation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "ParticipationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "CSRActivity" ADD COLUMN     "evidenceRequired" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "xp" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "EmployeeParticipation" ADD COLUMN     "status" "ParticipationStatus" NOT NULL DEFAULT 'PENDING';

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeParticipation_employeeId_activityId_key" ON "EmployeeParticipation"("employeeId", "activityId");
