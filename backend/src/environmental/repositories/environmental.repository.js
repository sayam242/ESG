import prisma from "../../db.js";
export const create = (data) =>
    prisma.environmentalGoal.create({
        data,
    });

export const findAll = ({ search }) =>
    prisma.environmentalGoal.findMany({
        where: search
            ? {
                  name: {
                      contains: search,
                      mode: "insensitive",
                  },
              }
            : {},
        orderBy: {
            createdAt: "desc",
        },
    });

export const findById = (id) =>
    prisma.environmentalGoal.findUnique({
        where: { id },
    });

export const update = (id, data) =>
    prisma.environmentalGoal.update({
        where: { id },
        data,
    });

export const remove = (id) =>
    prisma.environmentalGoal.delete({
        where: { id },
    });

export const dashboard = async () => {

    const totalGoals = await prisma.environmentalGoal.count();

    const activeGoals = await prisma.environmentalGoal.count({
        where: {
            status: "ACTIVE",
        },
    });

    const completedGoals = await prisma.environmentalGoal.count({
        where: {
            status: "COMPLETED",
        },
    });

    const goals = await prisma.environmentalGoal.findMany();

    const totalTargetCO2 = goals.reduce(
        (sum, g) => sum + g.targetCO2,
        0
    );

    const currentCO2 = goals.reduce(
        (sum, g) => sum + g.currentCO2,
        0
    );

    return {
        totalGoals,
        activeGoals,
        completedGoals,
        totalTargetCO2,
        currentCO2,
        reduction: totalTargetCO2 - currentCO2,
    };
};

export const stats = async () => {

    const active = await prisma.environmentalGoal.count({
        where: {
            status: "ACTIVE",
        },
    });

    const completed = await prisma.environmentalGoal.count({
        where: {
            status: "COMPLETED",
        },
    });

    const overdue = await prisma.environmentalGoal.count({
        where: {
            status: "OVERDUE",
        },
    });

    return {
        active,
        completed,
        overdue,
    };
};