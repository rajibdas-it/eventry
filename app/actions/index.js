'use server'
import { createUser, findUserByCredentials, updateGoing, updateInterest } from "@/db/quries"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


//server action er jonno likhte hobe

async function registerUser(formData) {
    const user = Object.fromEntries(formData)
    // console.log(user);
    const created = await createUser(user)
    redirect('/login')

}

async function signIn(formData) {
    // const userCredential = Object.fromEntries(formData)

    try {
        const credential = {};
        credential.email = formData.get("email");
        credential.password = formData.get("password");
        const found = await findUserByCredentials(credential);
        return found

    } catch (error) {
        throw error;
    }

}

async function addInterestedEvent(eventId, authId) {
    try {
        // console.log(eventId);
        await updateInterest(eventId, authId)
    } catch (error) {
        throw error
    }
    revalidatePath('/')

}

async function addGoingEvent(eventId, user) {
    try {
        await updateGoing(eventId, user?.id)
    } catch (error) {
        throw error
    }

    revalidatePath("/")
    redirect("/")

}

export { registerUser, signIn, addInterestedEvent, addGoingEvent }