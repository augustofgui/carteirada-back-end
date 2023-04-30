-- CreateTable
CREATE TABLE "active_assets" (
    "active" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "ticker" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "active_assets_active_ticker_key" ON "active_assets"("active", "ticker");

-- AddForeignKey
ALTER TABLE "active_assets" ADD CONSTRAINT "active_assets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
