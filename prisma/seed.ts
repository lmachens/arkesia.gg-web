import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const db = new PrismaClient();

async function seed() {
  const user = await db.user.create({
    data: {
      token: uuidv4(),
    },
  });

  console.log(
    `Added new user. Please use this token to identify on website:\n${user.token}`
  );
}

seed();
