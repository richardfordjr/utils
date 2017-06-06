'use strict';

var Promise = require('bluebird'),
request = require('request'),
methods = require('./lib/methods.js');


/**
 * Module exports.
 * @public
 */

module.exports = getData;

console.log('app started');
function getData (url, method){
  var opts = {
    url: url,
    method: methods[method]
  };
  return new Promise(function(resolve, reject){
     request(opts,function(err,res){
       if(err){
         reject(err);
       }else{
         resolve(res);
       }
     })
  })
}
