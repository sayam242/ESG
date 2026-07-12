import * as repo from "../repositories/reward.repository.js";

export const createReward = (body) => repo.create(body);

export const getRewards = (query) => repo.findAll(query);

export const getReward = (id) => repo.findById(id);

export const updateReward = (id, body) => repo.update(id, body);

export const deleteReward = (id) => repo.remove(id);
