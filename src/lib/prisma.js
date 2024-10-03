// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default prisma;

// to avoid opening multiple connections
import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;