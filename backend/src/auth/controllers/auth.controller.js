import { login, register } from "../services/auth.service.js";

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await login(email, password);
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

export const registerController = async (req, res) => {
  try {
    const { firstName, lastName, email, password, employeeNo, departmentId } = req.body;
    const user = await register(firstName, lastName, email, password, employeeNo, departmentId);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error registering user" });
  }
};