const express = require("express");
const router = express.Router();

// ✅ Feature route files
const companyRoutes = require("./companyRoutes");
const projectRoutes = require("./projectRoutes");
router.use("/", companyRoutes);
router.use("/", projectRoutes);

module.exports = router;
