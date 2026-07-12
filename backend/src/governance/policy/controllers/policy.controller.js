import * as service from "../services/policy.service.js";

export const createPolicy = async (req, res, next) => {
  try {
    const data = await service.createPolicy(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getPolicies = async (req, res, next) => {
  try {
    const data = await service.getPolicies(req.query);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getPolicy = async (req, res, next) => {
  try {
    const data = await service.getPolicy(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: "Policy not found" });
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const updatePolicy = async (req, res, next) => {
  try {
    const data = await service.updatePolicy(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const deletePolicy = async (req, res, next) => {
  try {
    await service.deletePolicy(req.params.id);
    res.json({ success: true, message: "Policy deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const acknowledgePolicy = async (req, res, next) => {
  try {
    const data = await service.acknowledgePolicy(req.params.id, req.body.employeeId);
    res.status(201).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};
