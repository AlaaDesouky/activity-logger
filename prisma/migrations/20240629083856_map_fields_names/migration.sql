/*
  Warnings:

  - You are about to drop the column `actionId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `actorId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `occurredAt` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `targetId` on the `Event` table. All the data in the column will be lost.
  - Added the required column `action_id` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actor_id` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `target_id` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_actionId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_actorId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_targetId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "actionId",
DROP COLUMN "actorId",
DROP COLUMN "occurredAt",
DROP COLUMN "targetId",
ADD COLUMN     "action_id" TEXT NOT NULL,
ADD COLUMN     "actor_id" TEXT NOT NULL,
ADD COLUMN     "group" TEXT NOT NULL,
ADD COLUMN     "occurred_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "target_id" TEXT NOT NULL,
ALTER COLUMN "metadata" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "Actor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "Action"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_target_id_fkey" FOREIGN KEY ("target_id") REFERENCES "Target"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
