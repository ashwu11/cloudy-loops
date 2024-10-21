import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
    userName : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        default : "user",
        unique : true
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;