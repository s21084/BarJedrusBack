-- CreateTable
CREATE TABLE "WorkDay" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "isEvent" BOOLEAN NOT NULL DEFAULT false,
    "informationBarId" INTEGER NOT NULL,
    CONSTRAINT "WorkDay_informationBarId_fkey" FOREIGN KEY ("informationBarId") REFERENCES "InformationBar" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
