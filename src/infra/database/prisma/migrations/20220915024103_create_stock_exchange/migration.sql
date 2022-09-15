-- CreateTable
CREATE TABLE "stock_exchanges" (
    "abbreviation" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "index" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "stock_exchanges_pkey" PRIMARY KEY ("abbreviation")
);
