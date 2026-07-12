import * as service from "../services/badge.service.js";

export const createBadge = async (req, res, next) => {
  try {
    const data = await service.createBadge(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getBadges = async (req, res, next) => {
  try {
    const data = await service.getBadges(req.query);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const getBadge = async (req, res, next) => {
  try {
    const data = await service.getBadge(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: "Badge not found" });
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const updateBadge = async (req, res, next) => {
  try {
    const data = await service.updateBadge(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const deleteBadge = async (req, res, next) => {
  try {
    await service.deleteBadge(req.params.id);
    res.json({ success: true, message: "Badge deleted successfully" });
  } catch (error) {
    next(error);
  }
};
