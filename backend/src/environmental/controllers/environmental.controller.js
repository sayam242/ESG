import * as service from "../services/environmental.service.js";

export const createGoal = async (req, res) => {
    const goal = await service.createGoal(req.body);
    res.status(201).json(goal);
};

export const getGoals = async (req, res) => {
    const data = await service.getGoals(req.query);
    res.json(data);
};

export const getGoal = async (req, res) => {
    const data = await service.getGoal(req.params.id);
    res.json(data);
};

export const updateGoal = async (req, res) => {
    const data = await service.updateGoal(req.params.id, req.body);
    res.json(data);
};

export const deleteGoal = async (req, res) => {
    await service.deleteGoal(req.params.id);
    res.json({ message: "Deleted Successfully" });
};

export const dashboard = async (req, res) => {
    const data = await service.dashboard();
    res.json(data);
};

export const stats = async (req, res) => {
    const data = await service.stats();
    res.json(data);
};