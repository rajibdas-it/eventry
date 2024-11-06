import { events } from "@/models/events.model";
import { users } from "@/models/users.model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";



async function getAllEvents() {

    const allEvents = await events.find().lean();
    return replaceMongoIdInArray(allEvents)

}

async function getEventDetails(eventId) {
    const event = await events.findById(eventId).lean()
    return replaceMongoIdInObject(event)

}

async function createUser(user) {
    return await users.create(user)

}

export { getAllEvents, getEventDetails, createUser }