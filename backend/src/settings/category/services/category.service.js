import * as repo from "../repositories/category.repository.js";

export const createCategory = (body) => repo.create(body);

export const getCategories = (query) => repo.findAll(query);

export const getCategory = (id) => repo.findById(id);

export const updateCategory = (id, body) => repo.update(id, body);

export const deleteCategory = (id) => repo.remove(id);
