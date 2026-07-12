import * as repo from "../repositories/environmental.repository.js";

export const createGoal = (body) => repo.create(body);

export const getGoals = (query) => repo.findAll(query);

export const getGoal = (id) => repo.findById(id);

export const updateGoal = (id, body) => repo.update(id, body);

export const deleteGoal = (id) => repo.remove(id);

export const dashboard = () => repo.dashboard();

export const stats = () => repo.stats();