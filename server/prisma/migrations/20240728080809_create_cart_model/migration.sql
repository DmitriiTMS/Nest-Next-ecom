-- CreateTable
CREATE TABLE "cart" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "partId" TEXT NOT NULL,
    "boiler_manufacture" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "parts_manufacture" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "in_stock" INTEGER NOT NULL DEFAULT 0,
    "count" INTEGER NOT NULL,
    "total_price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);
