import * as service from "../services/employee.service.js";

export const getEmployees = async (req, res, next) => {
  try {
    const data = await service.getEmployees(req.query);
    res.json({ success: true, data });
  } catch (error) { next(error); }
};

export const getEmployee = async (req, res, next) => {
  try {
    const data = await service.getEmployee(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: "Employee not found" });
    res.json({ success: true, data });
  } catch (error) { next(error); }
};

export const updateEmployee = async (req, res, next) => {
  try {
    const data = await service.updateEmployee(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) { next(error); }
};

export const deleteEmployee = async (req, res, next) => {
  try {
    await service.deleteEmployee(req.params.id);
    res.json({ success: true, message: "Employee deleted successfully" });
  } catch (error) { next(error); }
};

export const getEmployeeStats = async (req, res, next) => {
  try {
    const data = await service.getEmployeeStats(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: "Employee not found" });
    res.json({ success: true, data });
  } catch (error) { next(error); }
};
