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
  await app.register(cors, {
    origin: [
      "http://localhost:5173",
      "https://*.vercel.app",
      "https://devclientes-matheusccp2.vercel.app",
    ],
    credentials: true,
  });

  await app.register(routes);

  try {
    const PORT = Number(process.env.PORT) || 3333;
    const HOST = "0.0.0.0"; // CRÍTICO: deve ser 0.0.0.0 para o Render

    await app.listen({
      port: PORT,
      host: HOST, // Adiciona o host
    });

    console.log(`🚀 Server running on ${HOST}:${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();