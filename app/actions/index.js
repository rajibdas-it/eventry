'use server'
import { createUser, findUserByCredentials, getEventDetails, updateGoing, updateInterest } from "@/db/quries"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { Resend } from "resend"
import EmailTemplate from "../Components/payments/EmailTemplate"

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
        await sendEmail(eventId, user)
    } catch (error) {
        throw error
    }

    revalidatePath("/")
    redirect("/")

}

async function sendEmail(eventId, user) {
    try {
        const event = await getEventDetails(eventId)
        const resend = new Resend(process.env.RESEND_API)
        const message = `Dear ${user?.name}, you have been successfully registered 
    for the event, ${event?.name}. please carry this email and your official id
    to the venue. we are excited to have you here.`;
        const sent = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: user?.email,
            subject: "Successfully  Registered for the event",
            react: EmailTemplate({ message })
        })

    } catch (error) {
        throw error
    }

}

export { registerUser, signIn, addInterestedEvent, addGoingEvent, sendEmail }