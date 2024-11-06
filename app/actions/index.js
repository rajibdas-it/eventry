'use server'
import { createUser } from "@/db/quries"

//server action er jonno likhte hobe

async function registerUser(formData) {
    const user = Object.fromEntries(formData)
}
