import { events } from "@/models/events.model";
import { users } from "@/models/users.model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";
import mongoose from "mongoose";

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

// async function findUserByCredentials(userCredential) {
//     try {
//         const { email, password } = userCredential

//         const isExistingUser = await users.findOne({ email: email })
//         if (!isExistingUser) {
//             throw new Error("No User found with this email")
//         }

//         if (isExistingUser?.password !== password) {
//             throw new Error("No User found with this email")
//         }

//         return isExistingUser


//     } catch (error) {
//         console.log(error);
//     }
// }

async function findUserByCredentials(credentials) {
    const user = await users.findOne(credentials).lean();

    if (user) {
        return replaceMongoIdInObject(user);
    }
    return null;
}

async function updateInterest(eventId, authId) {
    const event = await events.findById(eventId)
    if (event) {
        const foundUsers = event.interested_ids.find((id) => id.toString() === authId)
        if (foundUsers) {
            event.interested_ids.pull(new mongoose.Types.ObjectId(authId))
        } else {
            event.interested_ids.push(new mongoose.Types.ObjectId(authId))
        }
        event.save()
    }
}

export { getAllEvents, getEventDetails, createUser, findUserByCredentials, updateInterest }