import { ListCustomerService } from "../services/ListCustomerService.js";
export class ListCustomerController {
    async handle(request, reply) {
        const listCustomerService = new ListCustomerService();
        const customers = await listCustomerService.execute();
        reply.send(customers);
    }
}
//# sourceMappingURL=ListCustomerController.js.map