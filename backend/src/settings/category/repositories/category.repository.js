import prisma from "../../../db.js";

export const create = (data) =>
  prisma.category.create({ data });

export const findAll = ({ search }) =>
  prisma.category.findMany({
    where: search
      ? { name: { contains: search, mode: "insensitive" } }
      : {},
    orderBy: { createdAt: "desc" },
  });

export const findById = (id) =>
  prisma.category.findUnique({ where: { id } });

export const update = (id, data) =>
  prisma.category.update({ where: { id }, data });

export const remove = (id) =>
  prisma.category.delete({ where: { id } });
