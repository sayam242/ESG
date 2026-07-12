import * as repo from "../repositories/badge.repository.js";

export const createBadge = (body) => repo.create(body);

export const getBadges = (query) => repo.findAll(query);

export const getBadge = (id) => repo.findById(id);

export const updateBadge = (id, body) => repo.update(id, body);

export const deleteBadge = (id) => repo.remove(id);
