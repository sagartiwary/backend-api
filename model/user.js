const mongoose = require("mongoose");
// creating schema for the user
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    }
},{
    versionKey:false
})
const UserModel = mongoose.model("user", userSchema);
module.exports = {
    UserModel
}