import { prismaClient } from "../prisma/index.js";
export class DeleteCustomerService {
    async execute({ id }) {
        if (!id) {
            throw new Error("Solicitação inválida!");
        }
        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id,
            },
        });
        if (!findCustomer) {
            throw new Error("Cliente não existe.");
        }
        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id,
            },
        });
        return { message: "Deletado com sucesso" };
    }
}
//# sourceMappingURL=DeleteCustomerService.js.map