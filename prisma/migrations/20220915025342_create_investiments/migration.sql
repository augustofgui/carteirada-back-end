-- CreateTable
CREATE TABLE "investiments" (
    "userId" TEXT NOT NULL,
    "assetCode" TEXT NOT NULL,
    "currentValue" DOUBLE PRECISION NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "totalValue" DOUBLE PRECISION NOT NULL,
    "purchase_date" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "investiments_userId_assetCode_key" ON "investiments"("userId", "assetCode");

-- AddForeignKey
ALTER TABLE "investiments" ADD CONSTRAINT "investiments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investiments" ADD CONSTRAINT "investiments_assetCode_fkey" FOREIGN KEY ("assetCode") REFERENCES "active_assets"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
