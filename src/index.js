import Fastify from "fastify";
import productsRoutes from "./routes/products.routes.js";
import connect from "./db.js";

const app = Fastify({ logger: true });

productsRoutes.forEach((route) => {
    app.route(route);
});

const start = async () => {
  try {
    await connect();
    await app.listen({ port: 3000 });
    app.log.info("🚀 Server running on http://localhost:3000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
