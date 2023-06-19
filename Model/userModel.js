const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        lastname:{
            type: String,
            required: false
        },
        email:{
            type: String,
            unique: true,
            required: true
        },
        role:{
            type: String,
            required: true
        },
      

    },)
    
