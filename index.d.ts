import { IonicNativePlugin } from '@ionic-native/core';
export interface MongodbSchema {
    $jsonSchema?: {
        bsonType?: string | string[];
        required?: string[];
        properties?: {
            [key: string]: {
                bsonType?: string | string[];
                title?: string;
                description?: string;
                minimum?: number;
                maximum?: number;
                exclusiveMaximum?: boolean;
                exclusiveMinimum?: boolean;
                enum?: any[];
                type?: string | string[];
                allOf?: any;
                anyOf?: any;
                multipleOf?: number;
                maxLength?: number;
                minLength?: number;
                pattern?: string;
                maxProperties?: number;
                minProperties?: number;
                required?: boolean;
                maxItems?: number;
                minItems?: number;
                uniqueItems?: boolean;
            };
        };
    };
}
export interface IndexKeys {
    [index: string]: number;
}
export interface IndexOptions {
    name: string;
    expireAfter: number;
    unique: boolean;
    max: number;
    min: number;
}
export interface PipelineStage {
    [index: string]: any;
}
export interface MongodbQuery {
    [index: string]: any;
}
export interface MongodbDocument {
    [index: string]: any;
}
export interface DeleteResult {
    deletedCount: number;
    query: MongodbQuery;
}
export interface UpdateResult {
    matchedCount: number;
    modifiedCount: number;
    upsertedId: {
        $oid: string;
    };
    query: MongodbQuery;
}
/**
 * @name Mongodb
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { Mongodb } from '@ionic-native/mongodb';
 *
 *
 * constructor(private mongodb: Mongodb) { }
 *
 * ...
 *
 *
 * this.mongodb.initiate('gudsi-app')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class Mongodb extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    initiate(appId: string): Promise<boolean>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    dropDatabase(databaseName: string): Promise<boolean>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    createCollection(databaseName: string, collectionName: string, schema?: MongodbSchema): Promise<boolean>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    dropCollection(databaseName: string, collectionName: string): Promise<boolean>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    listCollectionNames(databaseName: string): Promise<string[]>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    createIndex(databaseName: string, collectionName: string, keys: IndexKeys, options: IndexOptions): Promise<boolean>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    dropIndex(databaseName: string, collectionName: string, indexName: string): Promise<boolean>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    aggregate(databaseName: string, collectionName: string, pipeline: PipelineStage[]): Promise<MongodbDocument[]>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    count(databaseName: string, collectionName: string, query?: MongodbQuery): Promise<number>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    find(databaseName: string, collectionName: string, query?: MongodbQuery): Promise<MongodbDocument[]>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    findOne(databaseName: string, collectionName: string, query?: MongodbQuery): Promise<MongodbDocument>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    findById(databaseName: string, collectionName: string, id?: string | number): Promise<MongodbDocument>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    findOneAndUpdate(databaseName: string, collectionName: string, query: MongodbQuery, update: MongodbDocument): Promise<MongodbDocument>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    findOneAndReplace(databaseName: string, collectionName: string, query: MongodbQuery, replacement: MongodbDocument): Promise<MongodbDocument>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    findOneAndDelete(databaseName: string, collectionName: string, query: MongodbQuery): Promise<MongodbDocument>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    insertOne(databaseName: string, collectionName: string, document: MongodbDocument): Promise<MongodbDocument>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    insertMany(databaseName: string, collectionName: string, documents: MongodbDocument[]): Promise<MongodbDocument[]>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    replaceOne(databaseName: string, collectionName: string, query: MongodbQuery, replacemnet: MongodbDocument): Promise<UpdateResult>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    updateOne(databaseName: string, collectionName: string, query: MongodbQuery, update: MongodbDocument): Promise<UpdateResult>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    updateMany(databaseName: string, collectionName: string, query: MongodbQuery, update: MongodbDocument): Promise<UpdateResult>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    deleteOne(databaseName: string, collectionName: string, query: MongodbQuery): Promise<DeleteResult>;
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    deleteMany(databaseName: string, collectionName: string, query: MongodbQuery): Promise<DeleteResult>;
}
