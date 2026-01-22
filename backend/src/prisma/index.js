import { PrismaClient } from '../../generated/prisma/index.js';
export const prismaClient = new PrismaClient({
    log: ['query', 'error', 'warn'],
});
//# sourceMappingURL=index.js.map