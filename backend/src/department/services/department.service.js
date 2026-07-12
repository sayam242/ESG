import prisma from "../../db.js";

export const createDepartment = async (name, code, head, employeeCnt) => {
  const department = await prisma.department.create({
    data: { name, code, head, employeeCnt },
  });
  return department;
};

export const getAllDepartments = async () => {
  const departments = await prisma.department.findMany();
  return departments;
};

export const getDepartmentById = async (id) => {
  const department = await prisma.department.findUnique({
    where: { id },
  });
  if (!department) {
    throw new Error("Department not found");
  }
  return department;
};

export const updateDepartment = async (id, data) => {
  const department = await prisma.department.update({
    where: { id },
    data,
  });
  return department;
};

export const deleteDepartment = async (id) => {
  await prisma.department.delete({
    where: { id },
  });
};
