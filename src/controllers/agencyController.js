// External Dependancies
const boom = require('boom')

// Get Data Models
const Agency = require('../models/Agency')

// Get all agencies
exports.getAgencies = async (req, reply) => {
  try {
    const agencies = await Agency.find()
    return agencies
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single agency by ID
exports.getSingleAgency = async (req, reply) => {
  try {
    const id = req.params.id
    const agency = await Agency.findById(id)
    return agency
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new agency
exports.addAgency = async (req, reply) => {
  try {
    const agency = new Agency(req.body)
    return agency.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing agency
exports.updateAgency = async (req, reply) => {
  try {
    const id = req.params.id
    const agency = req.body
    const { ...updateData } = agency
    const update = await Agency.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a agency
exports.deleteAgency = async (req, reply) => {
  try {
    const id = req.params.id
    const agency = await Agency.findByIdAndRemove(id)
    return agency
  } catch (err) {
    throw boom.boomify(err)
  }
}
