import type { FastifyReply, FastifyRequest } from "fastify";
import { ListCustomerService } from "../services/ListCustomerService.js";

export class ListCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listCustomerService = new ListCustomerService();

        const customers = await listCustomerService.execute();

        reply.send(customers);
    }
}