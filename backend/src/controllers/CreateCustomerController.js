import { CreateCustomerService } from "../services/CreateCustomerService.js";
export class CreateCustomerController {
    async handle(request, reply) {
        const { name, email } = request.body;
        const customerService = new CreateCustomerService();
        const customer = await customerService.execute({ name, email });
        reply.send(customer);
    }
}
//# sourceMappingURL=CreateCustomerController.js.map