import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

async function main() {
  await prisma.actor.createMany({
    data: [{ name: "John Doe" }, { name: "Jane Smith" }, { name: "Tim Timmy" }],
  });

  await prisma.action.createMany({
    data: [
      { object: "event_action", name: "user.login_succeeded" },
      { object: "event_action", name: "user.logout" },
      { object: "event_action", name: "user.signup" },
    ],
  });

  await prisma.target.createMany({
    data: [
      { name: "john@example.com" },
      { name: "jane@example.com" },
      { name: "tim@example.com" },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
