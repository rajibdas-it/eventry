'use server'
import { createUser } from "@/db/quries"
import { redirect } from "next/navigation"

//server action er jonno likhte hobe

async function registerUser(formData) {
    const user = Object.fromEntries(formData)
    // console.log(user);
    const created = await createUser(user)
    redirect('/login')

}


export { registerUser }