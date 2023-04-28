const mongoose  = require("mongoose")

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
      }]
})


const userdetail = mongoose.model("User" , userSchema)
module.exports = userdetail;