// External Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const agencySchema = new Schema({
  bank: String,
  address: String,
  ag: String,
})

module.exports = mongoose.model('Agency', agencySchema)
