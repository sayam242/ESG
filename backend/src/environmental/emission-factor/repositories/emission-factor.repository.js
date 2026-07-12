import prisma from "../../../db.js";

export const create = (data) =>
  prisma.emissionFactor.create({ data });

export const findAll = ({ search }) =>
  prisma.emissionFactor.findMany({
    where: search
      ? { name: { contains: search, mode: "insensitive" } }
      : {},
    orderBy: { createdAt: "desc" },
  });

export const findById = (id) =>
  prisma.emissionFactor.findUnique({ where: { id } });

export const update = (id, data) =>
  prisma.emissionFactor.update({ where: { id }, data });

export const remove = (id) =>
  prisma.emissionFactor.delete({ where: { id } });
