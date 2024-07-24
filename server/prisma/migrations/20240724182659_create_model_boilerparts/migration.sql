-- CreateTable
CREATE TABLE "boilerparts" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "boiler_manufacture" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "parts_manufacture" TEXT NOT NULL,
    "vendor_code" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "in_stock" INTEGER NOT NULL DEFAULT 0,
    "bestsellers" BOOLEAN NOT NULL DEFAULT false,
    "new" BOOLEAN NOT NULL DEFAULT false,
    "popularity" INTEGER NOT NULL,
    "compatibility" TEXT NOT NULL,

    CONSTRAINT "boilerparts_pkey" PRIMARY KEY ("id")
);
