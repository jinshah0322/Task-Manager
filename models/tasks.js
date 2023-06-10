const mongoose = require('mongoose');   

// Declare the Schema of the Mongo model
var taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is not entered"],
        trim:true,
        maxlength:[20,"Name must not be greater than 20 characters"],
    },
    completed:{
        type:Boolean,
        default:false,
    },
});

//Export the model
module.exports = mongoose.model('Task', taskSchema);