
// Import MSQL connection
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableName, cb) {
        var queryString = `SELECT * FROM ${tableName};`;
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = `INSERT INTO ${table} ${cols} VALUES ${vals}`;
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            } 
            cb(result);
        });
    },
    
    updateOne: function (tableName, colVal, boolean, colName, condition, cb) {
        var queryString = `UPDATE ${tableName} SET ${colVal}=${boolean} WHERE ${colName}=${condition}`;
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            } 
            cb(result);
        });
    }
}

module.exports = orm;