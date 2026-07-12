import * as service from "../services/product.service.js";

export const createProduct = async (req, res, next) => {
  try {
    const data = await service.createProduct(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const data = await service.getProducts(req.query);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const data = await service.getProduct(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: "Product not found" });
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const data = await service.updateProduct(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    await service.deleteProduct(req.params.id);
    res.json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
};
