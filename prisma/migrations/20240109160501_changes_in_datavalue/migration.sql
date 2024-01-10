/*
  Warnings:

  - You are about to drop the `Vacation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `isCurrentMonthPayed` on the `Subscription` table. All the data in the column will be lost.
  - You are about to alter the column `dishType` on the `Subscription` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.
  - Added the required column `lastMonthPayed` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Vacation";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Subscription" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lastMonthPayed" TEXT NOT NULL,
    "dishType" BOOLEAN NOT NULL,
    "countOfDish" INTEGER,
    "onPlace" BOOLEAN NOT NULL,
    "notes" TEXT,
    "personId" INTEGER NOT NULL,
    CONSTRAINT "Subscription_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Subscription" ("countOfDish", "dishType", "id", "notes", "onPlace", "personId") SELECT "countOfDish", "dishType", "id", "notes", "onPlace", "personId" FROM "Subscription";
DROP TABLE "Subscription";
ALTER TABLE "new_Subscription" RENAME TO "Subscription";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
