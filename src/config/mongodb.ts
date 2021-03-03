import { MongoClient, Db } from "mongodb";
import { MONGODB_URI } from "../utils/secrets";

const mongoURI = MONGODB_URI;

const client = new MongoClient(mongoURI, { useUnifiedTopology: true });
