const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    email: { required: true, type: String },
    password: { required: true, type: String }
})


export const users = mongoose.models.users ?? mongoose.model('users', userSchema)