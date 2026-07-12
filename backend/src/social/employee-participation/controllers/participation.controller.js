import * as service from "../services/participation.service.js";

export const getParticipation = async (req, res, next) => {
  try {
    const data = await service.getParticipation(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: "Participation not found" });
    res.json({ success: true, data });
  } catch (error) { next(error); }
};

export const getAllParticipations = async (req, res, next) => {
  try {
    const data = await service.getAllParticipations(req.query);
    res.json({ success: true, data });
  } catch (error) { next(error); }
};

export const approveParticipation = async (req, res, next) => {
  try {
    const { points } = req.body;
    const data = await service.approveParticipation(req.params.id, points);
    res.json({ success: true, data });
  } catch (error) { next(error); }
};

export const rejectParticipation = async (req, res, next) => {
  try {
    const data = await service.rejectParticipation(req.params.id);
    res.json({ success: true, data });
  } catch (error) { next(error); }
};

export const submitProof = async (req, res, next) => {
  try {
    const data = await service.submitProof(req.params.id, req.body.proofUrl);
    res.json({ success: true, data });
  } catch (error) { next(error); }
};

export const deleteParticipation = async (req, res, next) => {
  try {
    await service.deleteParticipation(req.params.id);
    res.json({ success: true, message: "Participation deleted successfully" });
  } catch (error) { next(error); }
};
