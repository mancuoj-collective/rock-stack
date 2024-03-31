import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

declare global {
  var prisma: PrismaClient
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    prisma = new PrismaClient()
  }
  prisma = global.prisma
  prisma.$connect()
}

export { prisma }
