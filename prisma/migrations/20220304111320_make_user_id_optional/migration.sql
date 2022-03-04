-- DropForeignKey
ALTER TABLE "AreaNode" DROP CONSTRAINT "AreaNode_userId_fkey";

-- AlterTable
ALTER TABLE "AreaNode" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "AreaNode" ADD CONSTRAINT "AreaNode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
