const mongoose = require("mongoose") //connecting to mongodb


let uploadSchema = mongoose.Schema({
    myfile:{type:String},
    email:{type:String}
})

let uploadModel = mongoose.model("uploadSchema2", uploadSchema )

module.exports = uploadModel
