import prisma from "../../../db.js";

export const create = (data) =>
  prisma.badge.create({ data });

export const findAll = ({ search }) =>
  prisma.badge.findMany({
    where: search
      ? { name: { contains: search, mode: "insensitive" } }
      : {},
    include: { _count: { select: { employeeBadges: true } } },
    orderBy: { createdAt: "desc" },
  });

export const findById = (id) =>
  prisma.badge.findUnique({
    where: { id },
    include: {
      employeeBadges: {
        include: { employee: { select: { id: true, firstName: true, lastName: true, email: true } } },
        orderBy: { awardedAt: "desc" },
      },
    },
  });

export const update = (id, data) =>
  prisma.badge.update({ where: { id }, data });

export const remove = (id) =>
  prisma.badge.delete({ where: { id } });
