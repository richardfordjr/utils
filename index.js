'use strict';
var request = require('request');
var Promise = require('bluebird');

/**
 * Module exports.
 * @public
 */
 exports.add = add;

function add(a,b){
 return a + b;
}
