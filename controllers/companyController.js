const { Company } = require("../models/company");

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.status(200).json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.createCompany = async (req, res) => {
  try {
    const company = await Company.create({ name: req.body.name });
    res.status(201).json(company);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Failed to create company" });
  }
};
