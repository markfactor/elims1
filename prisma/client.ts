import { PrismaClient } from "@prisma/client";
import exp from "constants";

declare global {
    namespace NodeJS {
        interface global{}
    }
}
interface CustomNodeJsGlobal extends NodeJS.global {
    prisma: PrismaClient
}


declare const global: CustomNodeJsGlobal

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === "development") global.prisma = prisma

export default prisma