import {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
} from "../services/department.service.js";

export const createDepartmentController = async (req, res) => {
  try {
    const { name, code, head, employeeCnt } = req.body;
    const department = await createDepartment(name, code, head, employeeCnt);
    res.status(201).json({ message: "Department created successfully", department });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error creating department" });
  }
};

export const getAllDepartmentsController = async (req, res) => {
  try {
    const departments = await getAllDepartments();
    res.status(200).json(departments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching departments" });
  }
};

export const getDepartmentByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await getDepartmentById(id);
    res.status(200).json(department);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Department not found" });
  }
};

export const updateDepartmentController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, code, head, employeeCnt, status } = req.body;
    const department = await updateDepartment(id, { name, code, head, employeeCnt, status });
    res.status(200).json({ message: "Department updated successfully", department });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error updating department" });
  }
};

export const deleteDepartmentController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteDepartment(id);
    res.status(200).json({ message: "Department deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error deleting department" });
  }
};
