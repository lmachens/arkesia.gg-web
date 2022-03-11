-- AlterTable
ALTER TABLE "AreaNode" ADD COLUMN     "transitToId" INTEGER;

-- AddForeignKey
ALTER TABLE "AreaNode" ADD CONSTRAINT "AreaNode_transitToId_fkey" FOREIGN KEY ("transitToId") REFERENCES "AreaNode"("id") ON DELETE SET NULL ON UPDATE CASCADE;
