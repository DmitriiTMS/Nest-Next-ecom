/*
  Warnings:

  - You are about to drop the column `avatar_path` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `user` table. All the data in the column will be lost.
  - Added the required column `username` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "avatar_path",
DROP COLUMN "name",
DROP COLUMN "phone",
ADD COLUMN     "username" TEXT NOT NULL;
