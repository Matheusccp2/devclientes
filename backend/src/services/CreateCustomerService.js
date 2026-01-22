import { prismaClient } from "../prisma/index.js";
export class CreateCustomerService {
    async execute({ name, email }) {
        if (!name || !email) {
            throw new Error("Preencha todos os campos");
        }
        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true,
            },
        });
        return customer;
    }
}
//# sourceMappingURL=CreateCustomerService.js.map