/*
  Warnings:

  - You are about to alter the column `priceForWeight` on the `Dish` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `weekDayNumber` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Schedule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startHour" DATETIME,
    "endHour" DATETIME,
    "userId" INTEGER NOT NULL,
    "weekDayNumber" INTEGER NOT NULL,
    CONSTRAINT "Schedule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Schedule" ("endHour", "id", "startHour", "userId") SELECT "endHour", "id", "startHour", "userId" FROM "Schedule";
DROP TABLE "Schedule";
ALTER TABLE "new_Schedule" RENAME TO "Schedule";
CREATE TABLE "new_Dish" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "priceForPiece" INTEGER,
    "priceForWeight" INTEGER
);
INSERT INTO "new_Dish" ("id", "name", "priceForPiece", "priceForWeight") SELECT "id", "name", "priceForPiece", "priceForWeight" FROM "Dish";
DROP TABLE "Dish";
ALTER TABLE "new_Dish" RENAME TO "Dish";
CREATE UNIQUE INDEX "Dish_name_key" ON "Dish"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
