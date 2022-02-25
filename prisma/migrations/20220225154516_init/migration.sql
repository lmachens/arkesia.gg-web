-- CreateTable
CREATE TABLE "AreaNode" (
    "id" SERIAL NOT NULL,
    "areaName" TEXT NOT NULL,
    "position" DOUBLE PRECISION[],
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "screenshot" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "AreaNode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AreaNode_areaName_idx" ON "AreaNode"("areaName");

-- CreateIndex
CREATE UNIQUE INDEX "User_token_key" ON "User"("token");

-- CreateIndex
CREATE INDEX "User_token_idx" ON "User"("token");

-- AddForeignKey
ALTER TABLE "AreaNode" ADD CONSTRAINT "AreaNode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
