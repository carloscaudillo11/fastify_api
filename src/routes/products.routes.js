import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";
import {
  productSchema,
  productIdSchema,
  productResponseSchema,
} from "../schemas/products.shemas.js";

const routes = [
  {
    method: "GET",
    url: "/products",
    handler: getProducts,
    schema: { response: productResponseSchema },
  },
  {
    method: "GET",
    url: "/products/:id",
    handler: getProductById,
    schema: { ...productIdSchema, response: productResponseSchema },
  },
  {
    method: "POST",
    url: "/products",
    handler: createProduct,
    schema: { ...productSchema, response: productResponseSchema },
  },
  {
    method: "PUT",
    url: "/products/:id",
    handler: updateProduct,
    schema: {
      ...productIdSchema,
      ...productSchema,
      response: productResponseSchema,
    },
  },
  {
    method: "DELETE",
    url: "/products/:id",
    handler: deleteProduct,
    schema: { ...productIdSchema, response: productResponseSchema },
  },
];

export default routes;
