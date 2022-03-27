/*
  Warnings:

  - You are about to drop the column `areaName` on the `AreaNode` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `AreaNode` table. All the data in the column will be lost.
  - You are about to drop the column `tileId` on the `AreaNode` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "AreaNodeLocation" (
    "id" SERIAL NOT NULL,
    "areaNodeId" INTEGER NOT NULL,
    "areaName" TEXT NOT NULL,
    "tileId" INTEGER NOT NULL DEFAULT 0,
    "position" DOUBLE PRECISION[],

    CONSTRAINT "AreaNodeLocation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AreaNodeLocation_areaName_idx" ON "AreaNodeLocation"("areaName");

-- AddForeignKey
ALTER TABLE "AreaNodeLocation" ADD CONSTRAINT "AreaNodeLocation_areaNodeId_fkey" FOREIGN KEY ("areaNodeId") REFERENCES "AreaNode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- InsertInto
INSERT INTO "AreaNodeLocation" ("areaNodeId", "areaName", "tileId", "position")
SELECT "id", "areaName", "tileId", "position" FROM "AreaNode";

-- DropIndex
DROP INDEX "AreaNode_areaName_idx";

-- AlterTable
ALTER TABLE "AreaNode" DROP COLUMN "areaName",
DROP COLUMN "position",
DROP COLUMN "tileId";


