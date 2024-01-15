/*
  Warnings:

  - You are about to drop the `dayDish` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `informationBarId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `informationBarId` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "dayDish";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "DayDish" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "soup" TEXT,
    "secondDish" TEXT,
    "price" INTEGER NOT NULL DEFAULT 20,
    "informationBarId" INTEGER NOT NULL,
    CONSTRAINT "DayDish_informationBarId_fkey" FOREIGN KEY ("informationBarId") REFERENCES "InformationBar" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "decoration" BOOLEAN NOT NULL,
    "vegeCount" INTEGER,
    "meatCount" INTEGER,
    "prePay" INTEGER,
    "priceFull" INTEGER,
    "notes" TEXT NOT NULL,
    "informationBarId" INTEGER NOT NULL,
    CONSTRAINT "Event_informationBarId_fkey" FOREIGN KEY ("informationBarId") REFERENCES "InformationBar" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Event" ("date", "decoration", "id", "meatCount", "name", "notes", "prePay", "priceFull", "vegeCount") SELECT "date", "decoration", "id", "meatCount", "name", "notes", "prePay", "priceFull", "vegeCount" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
CREATE TABLE "new_Schedule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startHour" DATETIME,
    "endHour" DATETIME,
    "weekDayNumber" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "informationBarId" INTEGER NOT NULL,
    CONSTRAINT "Schedule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Schedule_informationBarId_fkey" FOREIGN KEY ("informationBarId") REFERENCES "InformationBar" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Schedule" ("endHour", "id", "startHour", "userId", "weekDayNumber") SELECT "endHour", "id", "startHour", "userId", "weekDayNumber" FROM "Schedule";
DROP TABLE "Schedule";
ALTER TABLE "new_Schedule" RENAME TO "Schedule";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
