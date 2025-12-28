import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('MONGODB_URI is not defined in .env');
}

const client = new MongoClient(uri);

let db;

export async function connectDB() {
  if (db) return db;

  await client.connect();
  db = client.db();

  console.log('MongoDB connected');
  return db;
}
