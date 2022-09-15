-- CreateTable
CREATE TABLE "juridic_persons" (
    "userId" TEXT NOT NULL,
    "cnae" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "situation" TEXT NOT NULL,

    CONSTRAINT "juridic_persons_pkey" PRIMARY KEY ("userId")
);

-- AddForeignKey
ALTER TABLE "juridic_persons" ADD CONSTRAINT "juridic_persons_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
