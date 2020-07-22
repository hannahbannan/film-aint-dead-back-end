const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const PORT = process.env.PORT || 3050;
const photosController = require('./controllers/photosController');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

app.use("/", photosController);

app.set("port", process.env.PORT || 3050);
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});