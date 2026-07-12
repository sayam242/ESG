import * as repo from "../repositories/policy.repository.js";

export const createPolicy = (body) => repo.create(body);

export const getPolicies = (query) => repo.findAll(query);

export const getPolicy = (id) => repo.findById(id);

export const updatePolicy = (id, body) => repo.update(id, body);

export const deletePolicy = (id) => repo.remove(id);

export const acknowledgePolicy = async (policyId, employeeId) => {
  const existing = await repo.findAcknowledgement(policyId, employeeId);
  if (existing) {
    throw Object.assign(new Error("Policy already acknowledged"), { status: 409 });
  }
  return repo.acknowledge(policyId, employeeId);
};
