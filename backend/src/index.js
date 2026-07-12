import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import authRoutes from "./auth/routes/auth.routes.js";
import adminRoutes from "./admin/routes/admin.routes.js";

import environmentalGoalRoutes from "./environmental/environmental-goal/routes/environmental.routes.js";
import emissionFactorRoutes from "./environmental/emission-factor/routes/emission-factor.routes.js";
import productRoutes from "./environmental/product-profile/routes/product.routes.js";

import policyRoutes from "./governance/policy/routes/policy.routes.js";

import badgeRoutes from "./gamification/badge/routes/badge.routes.js";
import rewardRoutes from "./gamification/reward/routes/reward.routes.js";

import departmentRoutes from "./settings/department/routes/department.routes.js";
import categoryRoutes from "./settings/category/routes/category.routes.js";

import csrActivityRoutes from "./social/csr-activity/routes/csr-activity.routes.js";
import participationRoutes from "./social/employee-participation/routes/participation.routes.js";

import employeeRoutes from "./employee/routes/employee.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

app.use("/api/environment/goals", environmentalGoalRoutes);
app.use("/api/environment/emission-factors", emissionFactorRoutes);
app.use("/api/environment/products", productRoutes);

app.use("/api/governance/policies", policyRoutes);

app.use("/api/gamification/badges", badgeRoutes);
app.use("/api/gamification/rewards", rewardRoutes);

app.use("/api/settings/departments", departmentRoutes);
app.use("/api/settings/categories", categoryRoutes);

app.use("/api/social/csr-activities", csrActivityRoutes);
app.use("/api/social/participations", participationRoutes);

app.use("/api/employees", employeeRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
