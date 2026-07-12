import * as repo from "../repositories/product.repository.js";

export const createProduct = (body) => repo.create(body);

export const getProducts = (query) => repo.findAll(query);

export const getProduct = (id) => repo.findById(id);

export const updateProduct = (id, body) => repo.update(id, body);

export const deleteProduct = (id) => repo.remove(id);
