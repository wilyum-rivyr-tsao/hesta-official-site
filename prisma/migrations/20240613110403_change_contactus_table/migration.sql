/*
  Warnings:

  - You are about to drop the column `type` on the `Contact_us` table. All the data in the column will be lost.
  - Made the column `name` on table `Contact_us` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Contact_us` DROP COLUMN `type`,
    ADD COLUMN `consultation` VARCHAR(191) NULL,
    MODIFY `name` VARCHAR(191) NOT NULL;
