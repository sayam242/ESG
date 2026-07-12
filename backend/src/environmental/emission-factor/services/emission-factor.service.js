import * as repo from "../repositories/emission-factor.repository.js";

export const createEmissionFactor = (body) => repo.create(body);

export const getEmissionFactors = (query) => repo.findAll(query);

export const getEmissionFactor = (id) => repo.findById(id);

export const updateEmissionFactor = (id, body) => repo.update(id, body);

export const deleteEmissionFactor = (id) => repo.remove(id);
