import * as repo from "../repositories/employee.repository.js";

export const getEmployees = (query) => repo.findAll(query);

export const getEmployee = (id) => repo.findById(id);

export const updateEmployee = (id, body) => repo.update(id, body);

export const deleteEmployee = (id) => repo.remove(id);

export const getEmployeeStats = (id) => repo.getStats(id);
