import prisma from "../../../db.js";

export const findById = (id) =>
  prisma.employeeParticipation.findUnique({
    where: { id },
    include: {
      employee: {
        select: { id: true, firstName: true, lastName: true, email: true, employeeNo: true, xp: true },
      },
      activity: {
        select: { id: true, title: true, evidenceRequired: true, status: true },
      },
    },
  });

export const findMany = (filters) => {
  const where = {};
  if (filters.status) where.status = filters.status;
  if (filters.employeeId) where.employeeId = filters.employeeId;
  if (filters.activityId) where.activityId = filters.activityId;

  return prisma.employeeParticipation.findMany({
    where,
    include: {
      employee: {
        select: { id: true, firstName: true, lastName: true, email: true, employeeNo: true },
      },
      activity: {
        select: { id: true, title: true, evidenceRequired: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};

export const update = (id, data) =>
  prisma.employeeParticipation.update({ where: { id }, data });

export const remove = (id) =>
  prisma.employeeParticipation.delete({ where: { id } });
