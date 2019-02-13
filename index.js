var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
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
var Mongodb = (function (_super) {
    __extends(Mongodb, _super);
    function Mongodb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.initiate = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (appId) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.dropDatabase = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.createCollection = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName, schema) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.dropCollection = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.listCollectionNames = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.createIndex = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName, keys, options) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.dropIndex = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName, indexName) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.aggregate = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName, pipeline) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.count = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName, query) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.find = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName, query) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.findOne = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName, query) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.findById = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName, id) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.findOneAndUpdate = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName, query, update) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.findOneAndReplace = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName, query, replacement) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.findOneAndDelete = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName, query) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.insertOne = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName, document) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.insertMany = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName, documents) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.replaceOne = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName, query, replacemnet) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.updateOne = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName, query, update) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.updateMany = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName, query, update) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.deleteOne = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName, query) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Mongodb.prototype.deleteMany = /**
       * This function does something
       * @param arg1 {string} Some param to configure something
       * @param arg2 {number} Another param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (databaseName, collectionName, query) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    Mongodb.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "initiate", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "dropDatabase", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "createCollection", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "dropCollection", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "listCollectionNames", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "createIndex", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "dropIndex", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Array]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "aggregate", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "count", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "find", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "findOne", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "findById", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "findOneAndUpdate", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "findOneAndReplace", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "findOneAndDelete", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "insertOne", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Array]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "insertMany", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "replaceOne", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "updateOne", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "updateMany", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "deleteOne", null);
    __decorate([
        Cordova({
            otherPromise: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], Mongodb.prototype, "deleteMany", null);
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
    Mongodb = __decorate([
        Plugin({
            pluginName: 'Mongodb',
            plugin: 'gudsi-mongodb-plugin',
            // npm package name, example: cordova-plugin-camera
            pluginRef: 'cordova.plugins.mongodb',
            // the variable reference to call the plugin, example: navigator.geolocation
            repo: 'https://github.com/luisbobadilla/gudsi-mongodb-plugin.git',
            // the github repository URL for the plugin
            platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], Mongodb);
    return Mongodb;
}(IonicNativePlugin));
export { Mongodb };
//# sourceMappingURL=index.js.map