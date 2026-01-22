import type {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController.js";
import { ListCustomerController } from "./controllers/ListCustomerController.js";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) {
  fastify.get(
    "/teste",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return { ok: true };
    },
  );

  fastify.post(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply);
    },
  );

  fastify.get(
    "/customers",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListCustomerController().handle(request, reply);
    },
  );
}
