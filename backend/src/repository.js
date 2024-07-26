require("dotenv").config();
const { MongoClient } = require("mongodb");
var ObjectId = require('mongodb').ObjectId; 

const client = new MongoClient(process.env.CONNECTION_STRING);

async function create(newItem) {
  try {
    await client.connect();

    const result = await client
      .db("aos")
      .collection("battles")
      .insertOne(newItem);

    return result.insertedId;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function read(id) {
  try {
    await client.connect();

    const oid = ObjectId.createFromHexString(id);
    const item = await client
      .db("aos")
      .collection("battles")
      .findOne({ _id: oid });

    return item;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function readAll() {
  try {
    await client.connect();

    const battles = client.db("aos").collection("battles");

    if ((await battles.countDocuments()) == 0) {
      console.log("No documents found.");
    } else {
      const items = await battles.find().toArray();
      return items;
    }
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports.create = create;
module.exports.read = read;
module.exports.readAll = readAll;
