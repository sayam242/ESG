import prisma from "../../../db.js";

export const create = (data) => {
  const { categoryId, ...rest } = data;
  return prisma.cSRActivity.create({
    data: {
      ...rest,
      ...(categoryId ? { category: { connect: { id: categoryId } } } : {}),
    },
  });
};

export const findAll = ({ search }) =>
  prisma.cSRActivity.findMany({
    where: search
      ? { title: { contains: search, mode: "insensitive" } }
      : {},
    include: {
      category: { select: { id: true, name: true } },
      _count: { select: { participations: true } },
    },
    orderBy: { createdAt: "desc" },
  });

export const findById = (id) =>
  prisma.cSRActivity.findUnique({
    where: { id },
    include: {
      category: { select: { id: true, name: true } },
      _count: { select: { participations: true } },
    },
  });

export const update = (id, data) => {
  const { categoryId, ...rest } = data;
  return prisma.cSRActivity.update({
    where: { id },
    data: {
      ...rest,
      ...(categoryId !== undefined
        ? { category: categoryId ? { connect: { id: categoryId } } : { disconnect: true } }
        : {}),
    },
  });
};

export const remove = (id) =>
  prisma.cSRActivity.delete({ where: { id } });

export const findParticipants = (activityId) =>
  prisma.employeeParticipation.findMany({
    where: { activityId },
    include: {
      employee: {
        select: { id: true, firstName: true, lastName: true, email: true, employeeNo: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

export const findExistingParticipation = (employeeId, activityId) =>
  prisma.employeeParticipation.findUnique({
    where: { employeeId_activityId: { employeeId, activityId } },
  });

export const createParticipation = (data) =>
  prisma.employeeParticipation.create({ data });
