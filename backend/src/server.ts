import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
  const err = error as Error;
  app.log.error(err);
  reply.code(400).send({ message: err.message });
});

const start = async () => {
  // Registra CORS ANTES de qualquer outra coisa
  await app.register(cors, {
    origin: true, // Temporariamente aceita qualquer origem para teste
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    exposedHeaders: ["Content-Range", "X-Content-Range"],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
  });

  await app.register(routes);

  try {
    const PORT = Number(process.env.PORT) || 3333;
    const HOST = "0.0.0.0";

    await app.listen({
      port: PORT,
      host: HOST,
    });

    console.log(`🚀 Server running on ${HOST}:${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();