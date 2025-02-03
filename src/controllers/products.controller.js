import productModel from "../models/product.model.js";
import Boom from "@hapi/boom"; // Manejo de errores más claro

const getProducts = async (request, reply) => {
  try {
    const products = await productModel.find();
    return reply.send({ products });
  } catch (err) {
    return reply.send(Boom.internal(err.message));
  }
};

const createProduct = async (request, reply) => {
  try {
    const { title, image, description, price, quantity } = request.body;

    if (!title || !price || !quantity) {
      throw Boom.badRequest("Title, price, and quantity are required.");
    }

    const product = { title, image, description, price, quantity };
    const productdb = await productModel.create(product);

    return reply.send({ product: productdb });
  } catch (err) {
    return reply.send(err.isBoom ? err : Boom.badRequest(err.message));
  }
};

const getProductById = async (request, reply) => {
  try {
    const { id } = request.params;
    const product = await productModel.findById(id);

    if (!product) {
      throw Boom.notFound("Product not found");
    }

    return reply.send({ product });
  } catch (err) {
    return reply.send(err.isBoom ? err : Boom.badRequest(err.message));
  }
};

const updateProduct = async (request, reply) => {
  try {
    const { id } = request.params;
    const { title, image, description, price, quantity } = request.body;

    if (!title || !price || !quantity) {
      throw Boom.badRequest("Title, price, and quantity are required.");
    }    
    const product = { title, image, description, price, quantity };
    const productdb = await productModel.findByIdAndUpdate(id, product, {
      new: true,
    });

    return reply.send({ product: productdb });
  } catch (err) {
    return reply.send(err.isBoom ? err : Boom.badRequest(err.message));
  }
};

const deleteProduct = async (request, reply) => {
  try {
    const { id } = request.params;
    const product = await productModel.findByIdAndDelete(id);
    if (!product) {
      throw Boom.notFound("Product not found");
    }
    return reply.send({ product });
  } catch (err) {
    return reply.send(err.isBoom ? err : Boom.badRequest(err.message));
  }
};  

export { getProducts, createProduct, getProductById, updateProduct, deleteProduct };
