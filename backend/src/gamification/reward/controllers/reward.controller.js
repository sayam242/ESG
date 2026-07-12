import * as service from "../services/reward.service.js";

export const createReward = async (req, res, next) => {
  try {
    const data = await service.createReward(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getRewards = async (req, res, next) => {
  try {
    const data = await service.getRewards(req.query);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getReward = async (req, res, next) => {
  try {
    const data = await service.getReward(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: "Reward not found" });
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const updateReward = async (req, res, next) => {
  try {
    const data = await service.updateReward(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const deleteReward = async (req, res, next) => {
  try {
    await service.deleteReward(req.params.id);
    res.json({ success: true, message: "Reward deleted successfully" });
  } catch (error) {
    next(error);
  }
};
