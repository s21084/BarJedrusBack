-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Schedule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startHour" DATETIME,
    "endHour" DATETIME,
    "weekDayNumber" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "informationBarId" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "Schedule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Schedule_informationBarId_fkey" FOREIGN KEY ("informationBarId") REFERENCES "InformationBar" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Schedule" ("endHour", "id", "informationBarId", "startHour", "userId", "weekDayNumber") SELECT "endHour", "id", "informationBarId", "startHour", "userId", "weekDayNumber" FROM "Schedule";
DROP TABLE "Schedule";
ALTER TABLE "new_Schedule" RENAME TO "Schedule";
CREATE TABLE "new_DayDish" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "soup" TEXT,
    "secondDish" TEXT,
    "price" INTEGER NOT NULL DEFAULT 20,
    "informationBarId" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "DayDish_informationBarId_fkey" FOREIGN KEY ("informationBarId") REFERENCES "InformationBar" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DayDish" ("id", "informationBarId", "price", "secondDish", "soup") SELECT "id", "informationBarId", "price", "secondDish", "soup" FROM "DayDish";
DROP TABLE "DayDish";
ALTER TABLE "new_DayDish" RENAME TO "DayDish";
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
    "informationBarId" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "Event_informationBarId_fkey" FOREIGN KEY ("informationBarId") REFERENCES "InformationBar" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Event" ("date", "decoration", "id", "informationBarId", "meatCount", "name", "notes", "prePay", "priceFull", "vegeCount") SELECT "date", "decoration", "id", "informationBarId", "meatCount", "name", "notes", "prePay", "priceFull", "vegeCount" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
