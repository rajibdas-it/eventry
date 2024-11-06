import { events } from "@/models/events.model";
import { replaceMongoIdInArray } from "@/utils/data-utils";



async function getAllEvents() {

    const allEvents = await events.find().lean();
    return replaceMongoIdInArray(allEvents)

}

export { getAllEvents }