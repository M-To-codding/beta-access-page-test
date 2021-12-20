const { MongoClient } = require("mongodb");
import {connect} from "mongoose";

async function run(): Promise<void> {
  const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}${process.env.DB_NAME}?retryWrites=true&w=majority`;
  await connect(uri);
}


run().catch(err => console.log(err));