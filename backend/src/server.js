import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes.js";
import dotenv from "dotenv";
dotenv.config();
const app = Fastify({ logger: true });
app.setErrorHandler((error, request, reply) => {
    try {
    }
    catch (error) {
        const err = error;
        reply.code(400).send({ message: err.message });
    }
});
const start = async () => {
    await app.register(cors, {
        origin: [
            "http://localhost:5173",
            "https://seu-app.vercel.app",
            "https://*.vercel.app",
        ],
        credentials: true,
    });
    await app.register(routes);
    try {
        await app.listen({
            port: Number(process.env.PORT) || 3333,
        });
    }
    catch (err) {
        process.exit(1);
    }
};
start();
//# sourceMappingURL=server.js.map