'use strict';

var utils = require('../utils/writer.js');
var Agency = require('../service/AgencyService');

module.exports.addAgency = function addAgency (req, res, next) {
  var body = req.swagger.params['body'].value;
  Agency.addAgency(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAgency = function deleteAgency (req, res, next) {
  var agencyId = req.swagger.params['agencyId'].value;
  var api_key = req.swagger.params['api_key'].value;
  Agency.deleteAgency(agencyId,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAgencyById = function getAgencyById (req, res, next) {
  var agencyId = req.swagger.params['agencyId'].value;
  Agency.getAgencyById(agencyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllAgencies = function getAllAgencies (req, res, next) {
  Agency.getAllAgencies()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAgency = function updateAgency (req, res, next) {
  var body = req.swagger.params['body'].value;
  Agency.updateAgency(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAgencyWithForm = function updateAgencyWithForm (req, res, next) {
  var agencyId = req.swagger.params['agencyId'].value;
  var name = req.swagger.params['name'].value;
  var status = req.swagger.params['status'].value;
  Agency.updateAgencyWithForm(agencyId,name,status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
