import prisma from "../../../db.js";

export const create = (data) =>
  prisma.eSGPolicy.create({ data });

export const findAll = ({ search }) =>
  prisma.eSGPolicy.findMany({
    where: search
      ? { title: { contains: search, mode: "insensitive" } }
      : {},
    include: { _count: { select: { acknowledgements: true } } },
    orderBy: { createdAt: "desc" },
  });

export const findById = (id) =>
  prisma.eSGPolicy.findUnique({
    where: { id },
    include: {
      acknowledgements: {
        include: { employee: { select: { id: true, firstName: true, lastName: true, email: true } } },
        orderBy: { acceptedAt: "desc" },
      },
    },
  });

export const update = (id, data) =>
  prisma.eSGPolicy.update({ where: { id }, data });

export const remove = (id) =>
  prisma.eSGPolicy.delete({ where: { id } });

export const acknowledge = (policyId, employeeId) =>
  prisma.policyAcknowledgement.create({
    data: { policyId, employeeId, acceptedAt: new Date() },
  });

export const findAcknowledgement = (policyId, employeeId) =>
  prisma.policyAcknowledgement.findUnique({
    where: { policyId_employeeId: { policyId, employeeId } },
  });
