const { Schema, default: mongoose } = require("mongoose");

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 2
    },
    details: { type: String, required: true },
    location: { type: String, required: true },
    imageUrl: { type: String },
    interested_ids: {
        required: false,
        type: Array
    },
    going_ids: {
        required: false,
        type: Array
    },
    swags: {
        required: false,
        type: Array
    }

})


export const eventModel = mongoose.model.events ?? mongoose.model('events', eventSchema)