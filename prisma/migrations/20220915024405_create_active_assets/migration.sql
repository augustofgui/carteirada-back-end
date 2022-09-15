-- CreateTable
CREATE TABLE "active_assets" (
    "stock_exchanges_abbreviation" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "active_assets_pkey" PRIMARY KEY ("stock_exchanges_abbreviation")
);

-- CreateIndex
CREATE UNIQUE INDEX "active_assets_code_key" ON "active_assets"("code");

-- AddForeignKey
ALTER TABLE "active_assets" ADD CONSTRAINT "active_assets_stock_exchanges_abbreviation_fkey" FOREIGN KEY ("stock_exchanges_abbreviation") REFERENCES "stock_exchanges"("abbreviation") ON DELETE RESTRICT ON UPDATE CASCADE;
