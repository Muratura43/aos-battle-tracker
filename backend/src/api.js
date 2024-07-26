const express = require("express");
var repository = require("./repository");

async function start() {
  const app = express();
  const port = 3000;

  app.use(express.json()); // for parsing application/json

  app.listen(port, () => {
    console.log("Server running on port " + port);
  });

  app.get("/battles", async (req, res, next) => {
    const items = await repository.readAll();

    for (let i of items) {
      console.log(i._id + " " + i.a);
    }

    res.json(items);
  });

  app.get("/battles/:id", async (req, res, next) => {
    const newItem = await repository.read(req.params.id);

    if (newItem != null) {
      console.log(newItem.a);
    }
    
    res.json(newItem);
  });

  app.post("/battle", async (req, res, next) => {
    const id = await repository.create(req.body);
    console.log(id);

    res.json(id);
  });
}

module.exports.start = start;
