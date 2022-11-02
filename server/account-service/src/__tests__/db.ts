import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

// Connect to the database
export const connect = async () => {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  await mongoose.connect(uri);
};

// Disconnect and close connection
export const closeDatabase = async () => {
  const mongod = await MongoMemoryServer.create();
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

// Clear all database and remove all data
export const clearDatabase = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
};
