const express = require("express");
const router = require("./routes/routes");
const db = require("./models/index");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//creating tables if  don't exist
db.sequelize.sync();

// using routes in /routes
app.use(router);

//conecting in port 3001
const port = 3001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
