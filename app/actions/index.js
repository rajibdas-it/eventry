'use server'
import { createUser, loginUser } from "@/db/quries"
import { redirect } from "next/navigation"

//server action er jonno likhte hobe

async function registerUser(formData) {
    const user = Object.fromEntries(formData)
    // console.log(user);
    const created = await createUser(user)
    redirect('/login')

}

async function signIn(formData) {
    const userCredential = Object.fromEntries(formData)
    const loggedIn = await loginUser(userCredential)
    if (loggedIn) {
        redirect("/")
    }

}


export { registerUser, signIn }