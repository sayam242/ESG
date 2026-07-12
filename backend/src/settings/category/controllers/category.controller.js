import * as service from "../services/category.service.js";

export const createCategory = async (req, res, next) => {
  try {
    const category = await service.createCategory(req.body);
    res.status(201).json({ success: true, data: category });
  } catch (error) {
    next(error);
  }
};

export const getCategories = async (req, res, next) => {
  try {
    const data = await service.getCategories(req.query);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getCategory = async (req, res, next) => {
  try {
    const data = await service.getCategory(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: "Category not found" });
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const data = await service.updateCategory(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    await service.deleteCategory(req.params.id);
    res.json({ success: true, message: "Category deleted successfully" });
  } catch (error) {
    next(error);
  }
};
