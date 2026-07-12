import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import prisma from "../../db.js";

export const adminRegister = async (firstName, lastName, email, password, employeeNo) => {
  const existing = await prisma.employee.findUnique({ where: { email } });
  if (existing) {
    throw Object.assign(new Error("Email already registered"), { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.employee.create({
    data: { firstName, lastName, email, password: hashedPassword, employeeNo, role: "ADMIN", departmentId: null },
  });

  const token = jsonwebtoken.sign(
    { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, role: user.role, token };
};

export const adminLogin = async (email, password) => {
  const user = await prisma.employee.findUnique({ where: { email } });

  if (!user || user.role !== "ADMIN") {
    throw Object.assign(new Error("Invalid credentials or not an admin"), { status: 401 });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw Object.assign(new Error("Invalid credentials"), { status: 401 });
  }

  const token = jsonwebtoken.sign(
    { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, role: user.role, token };
};
