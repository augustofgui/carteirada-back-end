/*
  Warnings:

  - You are about to drop the `active_assets` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `investiment_funds` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `investiments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `juridic_persons` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `physical_persons` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `stock_exchanges` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "active_assets" DROP CONSTRAINT "active_assets_stock_exchanges_abbreviation_fkey";

-- DropForeignKey
ALTER TABLE "investiment_funds" DROP CONSTRAINT "investiment_funds_userId_fkey";

-- DropForeignKey
ALTER TABLE "investiments" DROP CONSTRAINT "investiments_assetCode_fkey";

-- DropForeignKey
ALTER TABLE "investiments" DROP CONSTRAINT "investiments_userId_fkey";

-- DropForeignKey
ALTER TABLE "juridic_persons" DROP CONSTRAINT "juridic_persons_userId_fkey";

-- DropForeignKey
ALTER TABLE "physical_persons" DROP CONSTRAINT "physical_persons_userId_fkey";

-- DropTable
DROP TABLE "active_assets";

-- DropTable
DROP TABLE "investiment_funds";

-- DropTable
DROP TABLE "investiments";

-- DropTable
DROP TABLE "juridic_persons";

-- DropTable
DROP TABLE "physical_persons";

-- DropTable
DROP TABLE "stock_exchanges";
