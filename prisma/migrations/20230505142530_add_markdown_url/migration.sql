/*
  Warnings:

  - You are about to drop the column `url` on the `Blog` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `markdownUrl` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" RENAME COLUMN  "url"  TO   "imageUrl"  ;
ALTER TABLE "Blog" ADD COLUMN     "markdownUrl" VARCHAR(255) NOT NULL  DEFAULT 'N/A';
