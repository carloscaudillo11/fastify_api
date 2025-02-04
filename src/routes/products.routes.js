const routes = [
  {
    method: "GET",
    url: "/products",
    handler: async (req, reply) => {
      const { getProducts } = await import(
        "../controllers/products.controller.js"
      );
      return getProducts(req, reply);
    },
    schema: async () => {
      const { productResponseSchema } = await import(
        "../schemas/products.shemas.js"
      );
      return { response: productResponseSchema };
    },
  },
  {
    method: "GET",
    url: "/products/:id",
    handler: async (req, reply) => {
      const { getProductById } = await import(
        "../controllers/products.controller.js"
      );
      return getProductById(req, reply);
    },
    schema: async () => {
      const { productIdSchema, productResponseSchema } = await import(
        "../schemas/products.shemas.js"
      );
      return { ...productIdSchema, response: productResponseSchema };
    },
  },
  {
    method: "POST",
    url: "/products",
    handler: async (req, reply) => {
      const { createProduct } = await import(
        "../controllers/products.controller.js"
      );
      return createProduct(req, reply);
    },
    schema: async () => {
      const { productSchema, productResponseSchema } = await import(
        "../schemas/products.shemas.js"
      );
      return { ...productSchema, response: productResponseSchema };
    },
  },
  {
    method: "PUT",
    url: "/products/:id",
    handler: async (req, reply) => {
      const { updateProduct } = await import(
        "../controllers/products.controller.js"
      );
      return updateProduct(req, reply);
    },
    schema: async () => {
      const { productIdSchema, productSchema, productResponseSchema } =
        await import("../schemas/products.shemas.js");
      return {
        ...productIdSchema,
        ...productSchema,
        response: productResponseSchema,
      };
    },
  },
  {
    method: "DELETE",
    url: "/products/:id",
    handler: async (req, reply) => {
      const { deleteProduct } = await import(
        "../controllers/products.controller.js"
      );
      return deleteProduct(req, reply);
    },
    schema: async () => {
      const { productIdSchema, productResponseSchema } = await import(
        "../schemas/products.shemas.js"
      );
      return { ...productIdSchema, response: productResponseSchema };
    },
  },
];

export default routes;
