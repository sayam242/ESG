import prisma from "../../db.js";

export const findAll = ({ search }) =>
  prisma.employee.findMany({
    where: search
      ? {
          OR: [
            { firstName: { contains: search, mode: "insensitive" } },
            { lastName: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
            { employeeNo: { contains: search, mode: "insensitive" } },
          ],
        }
      : {},
    include: {
      department: { select: { id: true, name: true, code: true } },
      _count: {
        select: {
          participations: true,
          badges: true,
          redemptions: true,
          challengeParticipations: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

export const findById = (id) =>
  prisma.employee.findUnique({
    where: { id },
    include: {
      department: { select: { id: true, name: true, code: true } },
      badges: {
        include: { badge: { select: { id: true, name: true, description: true } } },
        orderBy: { awardedAt: "desc" },
      },
      participations: {
        include: {
          activity: { select: { id: true, title: true } },
        },
        orderBy: { createdAt: "desc" },
      },
      challengeParticipations: {
        include: {
          challenge: { select: { id: true, title: true } },
        },
        orderBy: { createdAt: "desc" },
      },
      _count: {
        select: {
          participations: true,
          badges: true,
          redemptions: true,
          challengeParticipations: true,
          acknowledgements: true,
        },
      },
    },
  });

export const update = (id, data) =>
  prisma.employee.update({ where: { id }, data });

export const remove = (id) =>
  prisma.employee.delete({ where: { id } });

export const getStats = async (id) => {
  const employee = await prisma.employee.findUnique({
    where: { id },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      employeeNo: true,
      xp: true,
      department: { select: { id: true, name: true } },
      _count: {
        select: {
          participations: true,
          badges: true,
          redemptions: true,
          challengeParticipations: true,
          acknowledgements: true,
        },
      },
    },
  });

  if (!employee) return null;

  const approvedParticipations = await prisma.employeeParticipation.count({
    where: { employeeId: id, status: "APPROVED" },
  });

  const completedChallenges = await prisma.challengeParticipation.count({
    where: { employeeId: id, approvalDate: { not: null } },
  });

  return { ...employee, approvedParticipations, completedChallenges };
};
