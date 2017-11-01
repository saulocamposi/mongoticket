var path = require("path"),
    logger = require('log4js').getLogger('connection'),
    config = require("./config.json"),
    mongodb = require('mongodb');


var connection = {};

connection.mongoConfig = function (){
  var config = "";
  return config;
}
