import mongoose, { Schema } from "mongoose"


const eventSchema = new Schema({
    name: { type: String, required: true },
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


export const events = mongoose.models.events ?? mongoose.model("events", eventSchema);