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

async function loginUser(userCredintial) {
    try {
        const { email, password } = userCredintial
        console.log(email);
        const isExistingUser = await users.findOne({ email: email })
        if (!isExistingUser) {
            console.log("No user found with is email");
            return null
        }

        if (isExistingUser?.password !== password) {
            console.log("password not matched");
            return null
        }

        return isExistingUser


    } catch (error) {
        console.log(error);
    }
}

export { getAllEvents, getEventDetails, createUser, loginUser }