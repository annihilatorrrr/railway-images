import { PrismaClient } from "@prisma/client";
import pg from "railway/pg";

console.log("PWD", process.cwd());
console.log("CONFIG", pg.config);

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: pg.config.url,
    },
  },
});
