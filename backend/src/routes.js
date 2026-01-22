import { CreateCustomerController } from "./controllers/CreateCustomerController.js";
import { ListCustomerController } from "./controllers/ListCustomerController.js";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController.js";
export async function routes(fastify, options) {
    fastify.get("/teste", async (request, reply) => {
        return { ok: true };
    });
    fastify.post("/customer", async (request, reply) => {
        return new CreateCustomerController().handle(request, reply);
    });
    fastify.get("/customers", async (request, reply) => {
        return new ListCustomerController().handle(request, reply);
    });
    fastify.delete("/customer", async (request, reply) => {
        return new DeleteCustomerController().handle(request, reply);
    });
}
//# sourceMappingURL=routes.js.map