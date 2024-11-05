const { eventModel } = require("@/models/events.model");

async function getAllEvents() {
    const allEvents = await eventModel.find()
    return allEvents
}

export { getAllEvents }