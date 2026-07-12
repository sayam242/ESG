import * as service from "../services/admin.service.js";

export const adminRegisterController = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, employeeNo } = req.body;
    const data = await service.adminRegister(firstName, lastName, email, password, employeeNo);
    res.status(201).json({ success: true, data });
  } catch (error) { next(error); }
};

export const adminLoginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await service.adminLogin(email, password);
    res.json({ success: true, data });
  } catch (error) { next(error); }
};
