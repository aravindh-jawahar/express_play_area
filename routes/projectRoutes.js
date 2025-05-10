const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.get("/projects/:companyId", projectController.getAllProjects);

module.exports = router;
