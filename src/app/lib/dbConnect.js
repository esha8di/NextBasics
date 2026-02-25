
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://shuminnahar8di_db_user:1gz04SNB91c0HY6g@cluster0.zxphjqk.mongodb.net/?appName=Cluster0";
// // shuminnahar
// // 8C4q21XeRRJqpasB
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// export const connect = (collection) =>{
//   const database = "sample_mflix";
//   return client.db(database).collection(collection);
// }

// import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = "mongodb+srv://shuminnahar8di_db_user:1gz04SNB91c0HY6g@cluster0.zxphjqk.mongodb.net/?appName=Cluster0";

// let client;
// let clientPromise;

// if (!global._mongoClientPromise) {
//   client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//   });

//   global._mongoClientPromise = client.connect(); 
// }

// clientPromise = global._mongoClientPromise;

// export async function connect(collectionName) {
//   const client = await clientPromise;  
//   const db = client.db("sample_mflix"); 
//   return db.collection(collectionName);
// }

import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb://localhost:27017";


let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export async function connect(collectionName) {
  const client = await clientPromise;
  const db = client.db("Feedback");
  return db.collection(collectionName);
}