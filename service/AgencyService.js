'use strict';


/**
 * Add a new agency
 * 
 *
 * body Agency User object that needs to be added
 * no response value expected for this operation
 **/
exports.addAgency = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes an agency
 * 
 *
 * agencyId Long Agency id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteAgency = function(agencyId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find agency by ID
 * Returns a single agency
 *
 * agencyId Long ID of agency to return
 * returns Agency
 **/
exports.getAgencyById = function(agencyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bank" : "Banco do Brasil",
  "address" : "address",
  "ag" : "2090-0",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find all agencies
 * 
 *
 * returns List
 **/
exports.getAllAgencies = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "bank" : "Banco do Brasil",
  "address" : "address",
  "ag" : "2090-0",
  "id" : 0
}, {
  "bank" : "Banco do Brasil",
  "address" : "address",
  "ag" : "2090-0",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing agency
 * 
 *
 * body Agency 
 * no response value expected for this operation
 **/
exports.updateAgency = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates an agency in the store with form data
 * 
 *
 * agencyId Long ID of agency that needs to be updated
 * name String Updated name of the agency (optional)
 * status String Updated status of the agency (optional)
 * no response value expected for this operation
 **/
exports.updateAgencyWithForm = function(agencyId,name,status) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

