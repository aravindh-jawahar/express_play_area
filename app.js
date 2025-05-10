const express = require("express");
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes");

const sequelize = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", routes);

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3000, () =>
    console.log(
      `Server running on http://localhost:${process.env.PORT || 3000}`
    )
  );
});
