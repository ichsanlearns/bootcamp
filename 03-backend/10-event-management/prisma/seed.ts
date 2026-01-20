import { prisma } from "./../src/lib/prisma.lib.js";
import { Role, type User } from "../src/generated/prisma/client.js";
import { faker } from "@faker-js/faker";

// async function seed() {
//   try {
//     /* ----------------------------- Delete all data ---------------------------- */
//     await prisma.user.deleteMany();

//     console.info("All old data has been deleted 🗑️");

//     /* ----------------------------- Create new data ---------------------------- */
//     const customers: User[] = [
//       {
//         id: 1,
//         name: "Fadli Zoan",
//         email: "fadlizoan@mail.com",
//         password: "newpass",
//         role: "CUSTOMER",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         deletedAt: null,
//       },
//       {
//         id: 2,
//         name: "Aulia Rahman",
//         email: "auliarahman@mail.com",
//         password: "newpass",
//         role: "CUSTOMER",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         deletedAt: null,
//       },
//       {
//         id: 3,
//         name: "Dimas Pratama",
//         email: "dimaspratama@mail.com",
//         password: "newpass",
//         role: "CUSTOMER",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         deletedAt: null,
//       },
//       {
//         id: 4,
//         name: "Siti Nurhaliza",
//         email: "sitinurhaliza@mail.com",
//         password: "newpass",
//         role: "CUSTOMER",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         deletedAt: null,
//       },
//       {
//         id: 5,
//         name: "Rizky Maulana",
//         email: "rizkymaulana@mail.com",
//         password: "newpass",
//         role: "CUSTOMER",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         deletedAt: null,
//       },
//     ];
//     const eventOrganizers: User[] = [
//       {
//         id: 6,
//         name: "Andi Saputra",
//         email: "andisaputra@mail.com",
//         password: "newpass",
//         role: "EVENT_ORGANIZER",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         deletedAt: null,
//       },
//       {
//         id: 7,
//         name: "Maya Putri",
//         email: "mayaputri@mail.com",
//         password: "newpass",
//         role: "EVENT_ORGANIZER",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         deletedAt: null,
//       },
//       {
//         id: 8,
//         name: "Budi Santoso",
//         email: "budisantoso@mail.com",
//         password: "newpass",
//         role: "EVENT_ORGANIZER",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         deletedAt: null,
//       },
//       {
//         id: 9,
//         name: "Nabila Azzahra",
//         email: "nabilaazzahra@mail.com",
//         password: "newpass",
//         role: "EVENT_ORGANIZER",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         deletedAt: null,
//       },
//       {
//         id: 10,
//         name: "Rafi Hidayat",
//         email: "rafihidayat@mail.com",
//         password: "newpass",
//         role: "EVENT_ORGANIZER",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         deletedAt: null,
//       },
//     ];

//     await prisma.user.createMany({ data: [...customers, ...eventOrganizers] });
//     console.info("Seeding finished successfully 😊");
//   } catch (error) {
//     await prisma.$disconnect();
//     console.error(`Failed to seed data 😭`);
//     console.error(error);
//   } finally {
//     process.exit(1);
//   }
// }

/* -------------------------------------------------------------------------- */
/*                                 using faker                                */
/* -------------------------------------------------------------------------- */
async function seed() {
  try {
    /* ----------------------------- Delete all data ---------------------------- */
    await prisma.user.deleteMany();

    console.info("All old data has been deleted 🗑️");

    /* ----------------------------- Create new data ---------------------------- */
    const customers = Array.from({ length: 15 }).map((element) => ({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      role: Role.CUSTOMER,
    }));

    const eventOrganizers = Array.from({ length: 15 }).map((element) => ({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      role: Role.EVENT_ORGANIZER,
    }));

    await prisma.user.createMany({ data: [...customers, ...eventOrganizers] });

    // for (let i = 0; i < 15; i++) {
    //   await prisma.user.create({
    //     data: {
    //       name: faker.person.fullName(),
    //       email: faker.internet.email(),
    //       password: faker.internet.password(),
    //       role: Role.CUSTOMER,
    //     },
    //   });
    // }

    // for (let i = 0; i < 15; i++) {
    //   await prisma.user.create({
    //     data: {
    //       name: faker.person.fullName(),
    //       email: faker.internet.email(),
    //       password: faker.internet.password(),
    //       role: Role.EVENT_ORGANIZER,
    //     },
    //   });
    // }

    console.info("Seeding finished successfully 😊");
  } catch (error) {
    await prisma.$disconnect();
    console.error(`Failed to seed data 😭`);
    console.error(error);
  } finally {
    process.exit(1);
  }
}

seed();
