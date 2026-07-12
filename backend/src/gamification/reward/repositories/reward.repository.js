import prisma from "../../../db.js";

export const create = (data) =>
  prisma.reward.create({ data });

export const findAll = ({ search }) =>
  prisma.reward.findMany({
    where: search
      ? { name: { contains: search, mode: "insensitive" } }
      : {},
    orderBy: { createdAt: "desc" },
  });

export const findById = (id) =>
  prisma.reward.findUnique({ where: { id } });

export const update = (id, data) =>
  prisma.reward.update({ where: { id }, data });

export const remove = (id) =>
  prisma.reward.delete({ where: { id } });
