const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Project = sequelize.define(
  "Project",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    budget: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Not started", "In progress", "Completed"),
      defaultValue: "Not started",
      allowNull: false,
    },
    companyId: {
      type: DataTypes.UUID,
      references: {
        model: "Companies",
        key: "id",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { Project };
