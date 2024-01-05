-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "login" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "personId" INTEGER NOT NULL,
    CONSTRAINT "User_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Person" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "adressId" INTEGER NOT NULL,
    CONSTRAINT "Person_adressId_fkey" FOREIGN KEY ("adressId") REFERENCES "Adress" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Adress" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Street" TEXT NOT NULL,
    "HomeNumber" TEXT NOT NULL,
    "FlatNumber" TEXT,
    "City" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Dish" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "priceForPiece" INTEGER,
    "priceForWeight" TEXT
);

-- CreateTable
CREATE TABLE "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "decoration" BOOLEAN NOT NULL,
    "vegeCount" INTEGER,
    "meatCount" INTEGER,
    "prePay" INTEGER,
    "priceFull" INTEGER,
    "notes" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startHour" DATETIME NOT NULL,
    "endHour" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Schedule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "isCurrentMonthPayed" TEXT NOT NULL,
    "dishType" TEXT NOT NULL,
    "countOfDish" INTEGER NOT NULL,
    "onPlace" BOOLEAN NOT NULL,
    "notes" TEXT,
    "personId" INTEGER NOT NULL,
    CONSTRAINT "Subscription_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Vacation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dayStart" DATETIME NOT NULL,
    "dayEnd" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Vacation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "informationBar" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startHour" DATETIME NOT NULL,
    "endHour" DATETIME NOT NULL,
    "bonusNote" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "Dish_name_key" ON "Dish"("name");
