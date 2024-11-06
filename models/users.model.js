const { Schema, model, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    bio: { type: String }
})


export const users = mongoose.models.users ?? mongoose.model('users', userSchema)