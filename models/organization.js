const mongoose = require('mongoose')

let Schema = mongoose.Schema
let OrganizationSchema = new Schema(
    {
        name: {
            type: String,
            required: false,
        },
        organizationInfo: {
            type: String,
            required: false,
        },
    }
)

let Organization = mongoose.model("Organization",OrganizationSchema)

module.exports = Organization;