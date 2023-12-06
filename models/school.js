const mongoose = require('mongoose')

let Schema = mongoose.Schema
let SchoolSchema = new Schema(
    {
        name: {
            type: String,
            required: false,
        },
        schoolInfo: {
            type: String,
            required: false,
        },
        address: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Address'
          },
          organization: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Organization'
          }
    }
)

let School = mongoose.model("School",SchoolSchema)

module.exports = School;