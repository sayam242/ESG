import * as service from "../services/csr-activity.service.js";

export const createActivity = async (req, res, next) => {
  try {
    const data = await service.createActivity(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) { next(error); }
};

export const getActivities = async (req, res, next) => {
  try {
    const data = await service.getActivities(req.query);
    res.json({ success: true, data });
  } catch (error) { next(error); }
};

export const getActivity = async (req, res, next) => {
  try {
    const data = await service.getActivity(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: "Activity not found" });
    res.json({ success: true, data });
  } catch (error) { next(error); }
};

export const updateActivity = async (req, res, next) => {
  try {
    const data = await service.updateActivity(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (error) { next(error); }
};

export const deleteActivity = async (req, res, next) => {
  try {
    await service.deleteActivity(req.params.id);
    res.json({ success: true, message: "Activity deleted successfully" });
  } catch (error) { next(error); }
};

export const joinActivity = async (req, res, next) => {
  try {
    const data = await service.joinActivity(req.params.id, req.body.employeeId);
    res.status(201).json({ success: true, data });
  } catch (error) { next(error); }
};

export const getParticipants = async (req, res, next) => {
  try {
    const data = await service.getParticipants(req.params.id);
    res.json({ success: true, data });
  } catch (error) { next(error); }
};
