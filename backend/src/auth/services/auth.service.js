import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import prisma from "../../db.js";

export const login = async (email, password) => {
  const user = await prisma.employee.findUnique({
    where: { email }
  });

  if (user && await bcrypt.compare(password, user.password)) {
    const token = jsonwebtoken.sign({ id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, role: user.role, token };
  }
  throw new Error("Invalid credentials");
};

export const register = async (firstName, lastName, email, password, employeeNo, departmentId) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.employee.create({
    data: { firstName, lastName, email, password: hashedPassword, employeeNo, departmentId }
  });
  const token = jsonwebtoken.sign({ id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
  return { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, role: user.role, token };
};