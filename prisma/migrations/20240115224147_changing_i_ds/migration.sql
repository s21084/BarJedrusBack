/*
  Warnings:

  - You are about to drop the `WorkDay` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "WorkDay";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Person" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "adressId" INTEGER,
    CONSTRAINT "Person_adressId_fkey" FOREIGN KEY ("adressId") REFERENCES "Adress" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Person" ("adressId", "id", "name", "phone", "surname") SELECT "adressId", "id", "name", "phone", "surname" FROM "Person";
DROP TABLE "Person";
ALTER TABLE "new_Person" RENAME TO "Person";
CREATE TABLE "new_dayDish" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "soup" TEXT,
    "secondDish" TEXT,
    "price" INTEGER NOT NULL DEFAULT 20
);
INSERT INTO "new_dayDish" ("id", "secondDish", "soup") SELECT "id", "secondDish", "soup" FROM "dayDish";
DROP TABLE "dayDish";
ALTER TABLE "new_dayDish" RENAME TO "dayDish";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
