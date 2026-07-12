import * as service from "../services/environmental.service.js";

export const createGoal = async (req, res, next) => {
  try {
    const goal = await service.createGoal(req.body);
    res.status(201).json({ success: true, data: goal });
  } catch (error) { next(error); }
};

export const getGoals = async (req, res, next) => {
  try {
    const data = await service.getGoals(req.query);
    res.json({ success: true, data });
  } catch (error) { next(error); }
};

export const getGoal = async (req, res, next) => {
  try {
    const data = await service.getGoal(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: "Goal not found" });
    res.json({ success: true, data });
  } catch (error) { next(error); }
};

export const updateGoal = async (req, res, next) => {
  try {
    const data = await service.updateGoal(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) { next(error); }
};

export const deleteGoal = async (req, res, next) => {
  try {
    await service.deleteGoal(req.params.id);
    res.json({ success: true, message: "Goal deleted successfully" });
  } catch (error) { next(error); }
};

export const dashboard = async (req, res, next) => {
  try {
    const data = await service.dashboard();
    res.json({ success: true, data });
  } catch (error) { next(error); }
};

export const stats = async (req, res, next) => {
  try {
    const data = await service.stats();
    res.json({ success: true, data });
  } catch (error) { next(error); }
};
