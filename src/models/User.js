// External Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  email: String,
  cep: String,
  account: String,
  agency: [{ type: Schema.Types.ObjectId, ref: 'Agency' }]
})

module.exports = mongoose.model('User', userSchema)
