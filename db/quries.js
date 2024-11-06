import { events } from "@/models/events.model";



async function getAllEvents() {

    const allEvents = await events.find()
    console.log(allEvents);

}

export { getAllEvents }