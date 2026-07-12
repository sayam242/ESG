import prisma from "../../../db.js";

export const create = (data) =>
  prisma.productProfile.create({ data });

export const findAll = ({ search }) =>
  prisma.productProfile.findMany({
    where: search
      ? {
          OR: [
            { productName: { contains: search, mode: "insensitive" } },
            { sku: { contains: search, mode: "insensitive" } },
          ],
        }
      : {},
    orderBy: { createdAt: "desc" },
  });

export const findById = (id) =>
  prisma.productProfile.findUnique({ where: { id } });

export const update = (id, data) =>
  prisma.productProfile.update({ where: { id }, data });

export const remove = (id) =>
  prisma.productProfile.delete({ where: { id } });
