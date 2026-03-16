import { MongoClient } from 'mongodb';
import 'dotenv/config'

const client = new MongoClient(process.env.MONGO_CONNECT);

export default async function run() {
  try {
   await client.connect();
    console.log('Connected to MongoDB');
    return client.db('miltery').collection('racet')

    
} catch (error) {
    console.error('Connection error:', error);
} 
}

// console.log(await run().then(data=> data.find({}).toArray()))


