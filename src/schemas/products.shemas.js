const productSchema = {
  body: {
    type: "object",
    required: ["title", "image", "description", "price", "quantity"],
    properties: {
      title: { type: "string", minLength: 3, maxLength: 100 },
      image: { type: "string", format: "uri" },
      description: { type: "string", minLength: 10, maxLength: 500 },
      price: { type: "number", minimum: 0 },
      quantity: { type: "integer", minimum: 0 },
    },
  },
};

const productIdSchema = {
  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: { type: "string", pattern: "^[0-9a-fA-F]{24}$" }, // Para MongoDB ObjectId
    },
  },
};

const productResponseSchema = {
  200: {
    type: "object",
    properties: {
      success: { type: "boolean" },
      data: { type: "object", properties: productSchema.body.properties },
    },
  },
  400: {
    type: "object",
    properties: {
      success: { type: "boolean" },
      error: { type: "string" },
    },
  },
};

export { productSchema, productIdSchema, productResponseSchema };
