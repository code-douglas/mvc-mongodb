import 'dotenv/config';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_DB_URL);

async function run () {
  try {
    await client.connect();
    console.log('Connection successful');
  } catch(err) {
    console.log(err);
  }
}

run();

export default client;
