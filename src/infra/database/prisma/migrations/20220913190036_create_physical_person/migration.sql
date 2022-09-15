-- CreateTable
CREATE TABLE "physical_persons" (
    "userId" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "physical_persons_pkey" PRIMARY KEY ("userId")
);

-- AddForeignKey
ALTER TABLE "physical_persons" ADD CONSTRAINT "physical_persons_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
