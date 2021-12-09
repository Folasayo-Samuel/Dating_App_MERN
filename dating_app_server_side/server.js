const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
const Cards = require("../dating_app_server_side/modules/dbCards");

// App Config
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect(connection_ur1, {
  useNewUr1Parser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"));
app.post("/dating/cards", (req, res) => {
  const dbCards = req.body;
  Cards.create(dbCards, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.get("/dating/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
