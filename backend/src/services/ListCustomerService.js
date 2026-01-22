import { prismaClient } from "../prisma/index.js";
export class ListCustomerService {
    async execute() {
        const customers = await prismaClient.customer.findMany();
        return customers;
    }
}
//# sourceMappingURL=ListCustomerService.js.map