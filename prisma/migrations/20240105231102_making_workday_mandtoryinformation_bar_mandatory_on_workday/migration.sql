/*
  Warnings:

  - Made the column `informationBarId` on table `WorkDay` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WorkDay" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "isEvent" BOOLEAN NOT NULL DEFAULT false,
    "informationBarId" INTEGER NOT NULL,
    CONSTRAINT "WorkDay_informationBarId_fkey" FOREIGN KEY ("informationBarId") REFERENCES "InformationBar" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WorkDay" ("date", "id", "informationBarId", "isEvent") SELECT "date", "id", "informationBarId", "isEvent" FROM "WorkDay";
DROP TABLE "WorkDay";
ALTER TABLE "new_WorkDay" RENAME TO "WorkDay";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
