import * as service from "../services/emission-factor.service.js";

export const createEmissionFactor = async (req, res, next) => {
  try {
    const data = await service.createEmissionFactor(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getEmissionFactors = async (req, res, next) => {
  try {
    const data = await service.getEmissionFactors(req.query);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getEmissionFactor = async (req, res, next) => {
  try {
    const data = await service.getEmissionFactor(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: "Emission factor not found" });
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const updateEmissionFactor = async (req, res, next) => {
  try {
    const data = await service.updateEmissionFactor(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const deleteEmissionFactor = async (req, res, next) => {
  try {
    await service.deleteEmissionFactor(req.params.id);
    res.json({ success: true, message: "Emission factor deleted successfully" });
  } catch (error) {
    next(error);
  }
};
