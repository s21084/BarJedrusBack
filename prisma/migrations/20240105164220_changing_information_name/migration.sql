/*
  Warnings:

  - You are about to drop the `informationBar` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "informationBar";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "InformationBar" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startHour" DATETIME NOT NULL,
    "endHour" DATETIME NOT NULL,
    "bonusNote" TEXT
);
