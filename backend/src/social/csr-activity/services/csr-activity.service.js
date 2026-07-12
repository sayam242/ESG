import * as repo from "../repositories/csr-activity.repository.js";

export const createActivity = (body) => repo.create(body);

export const getActivities = (query) => repo.findAll(query);

export const getActivity = (id) => repo.findById(id);

export const updateActivity = (id, body) => repo.update(id, body);

export const deleteActivity = (id) => repo.remove(id);

export const getParticipants = (activityId) => repo.findParticipants(activityId);

export const joinActivity = async (activityId, employeeId) => {
  const activity = await repo.findById(activityId);
  if (!activity) {
    throw Object.assign(new Error("Activity not found"), { status: 404 });
  }

  const existing = await repo.findExistingParticipation(employeeId, activityId);
  if (existing) {
    throw Object.assign(new Error("Already joined this activity"), { status: 409 });
  }

  return repo.createParticipation({
    employeeId,
    activityId,
    activityDate: new Date(),
    status: "PENDING",
  });
};
