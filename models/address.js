const mongoose = require('mongoose')

let Schema = mongoose.Schema
let AddressSchema = new Schema({
    address: String,
    addressInfo : String
  });

let Address = mongoose.model("Address",AddressSchema)

module.exports = Address;