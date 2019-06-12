// External Dependancies
const boom = require('boom')

// Get Data Models
const User = require('../models/User')

// Get all users
exports.getUsers = async (req, reply) => {
  try {
    const users = await User.find()
    return users
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single agency by ID
exports.getSingleUser = async (req, reply) => {
  try {
    const id = req.params.id
    const agency = await User.findById(id)
    return agency
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new agency
exports.addUser = async (req, reply) => {
  try {
    const agency = new User(req.body)
    return agency.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing agency
exports.updateUser = async (req, reply) => {
  try {
    const id = req.params.id
    const agency = req.body
    const { ...updateData } = agency
    const update = await User.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a agency
exports.deleteUser = async (req, reply) => {
  try {
    const id = req.params.id
    const agency = await User.findByIdAndRemove(id)
    return agency
  } catch (err) {
    throw boom.boomify(err)
  }
}
