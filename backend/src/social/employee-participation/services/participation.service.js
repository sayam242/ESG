import * as repo from "../repositories/participation.repository.js";
import prisma from "../../../db.js";

export const getParticipation = (id) => repo.findById(id);

export const getAllParticipations = (filters) => repo.findMany(filters);

export const approveParticipation = async (id, points) => {
  const participation = await repo.findById(id);
  if (!participation) {
    throw Object.assign(new Error("Participation not found"), { status: 404 });
  }

  if (participation.status === "APPROVED") {
    throw Object.assign(new Error("Participation already approved"), { status: 409 });
  }

  if (participation.activity.evidenceRequired && !participation.proofUrl) {
    throw Object.assign(new Error("Evidence required before approval"), { status: 400 });
  }

  const updated = await repo.update(id, {
    status: "APPROVED",
    approvalDate: new Date(),
    completionDate: new Date(),
  });

  if (points && points > 0) {
    await prisma.employee.update({
      where: { id: participation.employeeId },
      data: { xp: { increment: points } },
    });
  }

  return updated;
};

export const rejectParticipation = async (id) => {
  const participation = await repo.findById(id);
  if (!participation) {
    throw Object.assign(new Error("Participation not found"), { status: 404 });
  }

  return repo.update(id, {
    status: "REJECTED",
    approvalDate: new Date(),
  });
};

export const submitProof = async (id, proofUrl) => {
  const participation = await repo.findById(id);
  if (!participation) {
    throw Object.assign(new Error("Participation not found"), { status: 404 });
  }

  if (participation.status === "APPROVED") {
    throw Object.assign(new Error("Cannot update proof for approved participation"), { status: 400 });
  }

  return repo.update(id, { proofUrl });
};

export const deleteParticipation = (id) => repo.remove(id);
