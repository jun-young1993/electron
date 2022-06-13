"use strict";
exports.__esModule = true;
exports.BaseModel = exports.STORE_TYPE = void 0;
var Nedb_1 = require("./stores/Nedb");
var STORE_TYPE;
(function (STORE_TYPE) {
    STORE_TYPE["NEDB"] = "nedb";
})(STORE_TYPE = exports.STORE_TYPE || (exports.STORE_TYPE = {}));
var BaseModel = /** @class */ (function () {
    function BaseModel(property) {
        this.store = STORE_TYPE.NEDB;
        Object.assign(this, property);
        this.setDb();
        // super.db = this.db();
    }
    BaseModel.prototype.setDb = function () {
        if (this.isNedb()) {
            var path = '/Users/junyoungkim/Desktop/junyoung/app/source/electron/db/' + this.table + '.db';
            var database = new Nedb_1.Nedb(path);
            this.database = database;
        }
    };
    BaseModel.prototype.isNedb = function () {
        if (this.store == STORE_TYPE.NEDB) {
            return true;
        }
        return false;
    };
    BaseModel.prototype.db = function () {
        return this.database.database;
    };
    return BaseModel;
}());
exports.BaseModel = BaseModel;
