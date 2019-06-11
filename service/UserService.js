'use strict';


/**
 * Create user
 * 
 *
 * body User Created user object
 * no response value expected for this operation
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete user
 * This can only be done by the logged in user.
 *
 * userId Long The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteUser = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find all users
 * 
 *
 * returns List
 **/
exports.getAllUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "agency" : {
    "bank" : "Banco do Brasil",
    "address" : "address",
    "ag" : "2090-0",
    "id" : 0
  },
  "name" : "name",
  "id" : 0,
  "email" : "email",
  "account" : "account",
  "cep" : "cep"
}, {
  "agency" : {
    "bank" : "Banco do Brasil",
    "address" : "address",
    "ag" : "2090-0",
    "id" : 0
  },
  "name" : "name",
  "id" : 0,
  "email" : "email",
  "account" : "account",
  "cep" : "cep"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user by userId
 * 
 *
 * userId Long The name that needs to be fetched.
 * returns User
 **/
exports.getUserById = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "agency" : {
    "bank" : "Banco do Brasil",
    "address" : "address",
    "ag" : "2090-0",
    "id" : 0
  },
  "name" : "name",
  "id" : 0,
  "email" : "email",
  "account" : "account",
  "cep" : "cep"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updated user
 * This can only be done by the logged in user.
 *
 * userId Long name that need to be updated
 * body User Updated user object
 * no response value expected for this operation
 **/
exports.updateUser = function(userId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

