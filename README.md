# Android Full Screen

This plugin enables developers create a local mongodb using the new mongodb mobile sdk.
[MongoDB Mobile](https://www.mongodb.com/products/mobile) 

Repo: https://github.com/luisbobadilla/ionic-native-mongodb

###  Installation

#### Install the Cordova and Ionic Wrapper plugins:
$ ionic cordova plugin add gudsi-plugin-mongodb
$ npm install --save ionic-native-mongodb

#### Add this plugin to your app's module
import { Mongodb } from 'ionic-native-mongodb';

###  Supported platforms

Android

---

###  Usage

import { Mongodb } from 'ionic-native-mongodb';

constructor(private mongodb: Mongodb) { }

...

try {
  await mongodb.initiate('gudsi-debug');
  await mongodb.createCollection('gudsi-debug', 'example',{
          $jsonSchema: {
            bsonType: "object",
            required: ["name"],
            properties: {
              name: {
                bsonType: "string",
                description: "must be a string and is required"
              },
              year: {
                bsonType: "int",
                minimum: 2017,
                maximum: 3017,
                exclusiveMaximum: false,
                description: "must be an integer in [ 2017, 3017 ] and is required"
              },
              major: {
                enum: ["Math", "English", "Computer Science", "History", null],
                description: "can only be one of the enum values and is required"
              }
            }
          }
        })
  const _document = await mongodb.insertOne('gudsi-debug', 'example', { 
    name:"hello",
    year:2017,
    major:"History"
  });
} catch (error) {
  console.log(error);
}

###  Instance Members
#### initiate(`appId: string`) 
This function has to be called before doing anything else, this is a mongodb mobile requirement.

`Returns: Promise<boolean>`

#### dropDatabase(`databaseName: string`)
[API reference for dropDatabase](https://docs.mongodb.com/manual/reference/method/db.dropDatabase/)

`Returns: Promise<boolean>`

#### createCollection(`databaseName: string, collectionName: string, schema?: MongodbSchema`)
[API reference for createCollection](https://docs.mongodb.com/manual/reference/method/db.createCollection/)

`Returns: Promise<boolean>`

#### dropCollection(`databaseName: string, collectionName: string`)
[API reference for dropCollection](https://docs.mongodb.com/manual/reference/method/db.collection.drop/)

`Returns: Promise<boolean>`

#### listCollectionNames(`databaseName: string`)
[API reference for getCollectionNames](https://docs.mongodb.com/manual/reference/method/db.getCollectionNames/)

`Returns: Promise<string>`

#### createIndex(`databaseName: string, collectionName: string, keys: IndexKeys, options: IndexOptions`)
[API reference for createIndex](https://docs.mongodb.com/manual/reference/method/db.collection.createIndex/)

`Returns: Promise<boolean>`

#### dropIndex(`databaseName: string, collectionName: string, indexName: string`)
[API reference for dropIndex](https://docs.mongodb.com/manual/reference/method/db.collection.dropIndex/)

`Returns: Promise<boolean>`

#### aggregate(`databaseName: string,collectionName: string,pipeline: PipelineStage []`)
[API reference for aggregate](https://docs.mongodb.com/manual/reference/method/db.collection.aggregate/)

`Returns: Promise<MongodbDocument[]>`

#### count(`databaseName: string, collectionName: string, query?: MongodbQuery`)
[API reference for count](https://docs.mongodb.com/manual/reference/method/db.collection.count/)

`Returns: Promise<number>`

#### find(`databaseName: string, collectionName: string, query?: MongodbQuery`)
[API reference for find](https://docs.mongodb.com/manual/reference/method/db.collection.find/)

`Returns: Promise<MongodbDocument[]>`

#### findOne(`databaseName: string, collectionName: string, query?: MongodbQuery`)
[API reference for findOne](https://docs.mongodb.com/manual/reference/method/db.collection.findOne/)

`Returns: Promise<MongodbDocument>`

#### findOne(`databaseName: string, collectionName: string, id?: string | number`)
[API reference for findOne](https://docs.mongodb.com/manual/reference/method/db.collection.find/)

`Returns: Promise<MongodbDocument>`

#### findOneAndUpdate(`databaseName: string, collectionName: string, query: MongodbQuery, update: MongodbDocument`)
[API reference for findOneAndUpdate](https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/)

`Returns: Promise<MongodbDocument>`

#### findOneAndReplace(`databaseName: string, collectionName: string, query: MongodbQuery, replacement: MongodbDocument`)
[API reference for findOneAndReplace](https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndReplace/)

`Returns: Promise<MongodbDocument>`

#### findOneAndDelete(`databaseName: string, collectionName: string, query: MongodbQuery`)
[API reference for findOneAndDelete](https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndDelete/)

`Returns: Promise<MongodbDocument>`

#### insertOne(`databaseName: string, collectionName: string, document: MongodbDocument`)
[API reference for insertOne](https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/)

`Returns: Promise<MongodbDocument>`

#### insertMany(`databaseName: string, collectionName: string, documents: MongodbDocument []`)
[API reference for insertMany](https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/)

`Returns: Promise<MongodbDocument []>`

#### replaceOne(`databaseName: string, collectionName: string, query: MongodbQuery, replacement: MongodbDocument`)
[API reference for replaceOne](https://docs.mongodb.com/manual/reference/method/db.collection.replaceOne/)

`Returns: Promise<UpdateResult>`

#### updateOne(`databaseName: string, collectionName: string, query: MongodbQuery, update: MongodbDocument`)
[API reference for updateOne](https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/)

`Returns: Promise<UpdateResult>`

#### updateMany(`databaseName: string, collectionName: string, query: MongodbQuery, update: MongodbDocument`)
[API reference for updateMany](https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/)

`Returns: Promise<UpdateResult>`

#### deleteOne(`databaseName: string, collectionName: string, query: MongodbQuery`)
[API reference for deleteOne](https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/)

`Returns: Promise<UpdateResult>`

#### deleteMany(`databaseName: string, collectionName: string, query: MongodbQuery`)
[API reference for deleteMany](https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany/)

`Returns: Promise<UpdateResult>`