import { DeleteCustomerService } from "../services/DeleteCustomerService.js";
export class DeleteCustomerController {
    async handle(request, reply) {
        const { id } = request.query;
        const customerService = new DeleteCustomerService();
        const customer = await customerService.execute({ id });
        reply.send(customer);
    }
}
//# sourceMappingURL=DeleteCustomerController.js.map