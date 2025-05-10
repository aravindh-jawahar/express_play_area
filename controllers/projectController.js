const { Project } = require("../models/project");

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({
      where: {
        companyId: req.params.companyId,
      },
    });
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
