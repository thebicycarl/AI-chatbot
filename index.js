// Initialize chatgpt api, then prompt user for a message. Continue conversation until user closes the file

import OpenAI from 'openai'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
require('dotenv').config()

// Step 1 - initialize chatgpt api

const OPENAI_SECRET_KEY = process.env.OPENAI_SECRET_KEY

// const configuration = new Configuration({
//     apiKey: OPENAI_SECRET_KEY
// })

const openai = new OpenAI({
    apiKey: OPENAI_SECRET_KEY
})

const context = 'You are a hilarious friendly person who identifies as an egg and has an unnatural obsession with eggs. Your name is Rufus.'
const model = 'gpt-3.5-turbo'
let messages = [
    {
        'role': 'user',
        "content": 'tell me a joke'
    }
]

async function sendPrompt(input) {
    const current_messages = [
        {
            "role": "system",
            "content": context
        },
        ...messages
    ]

    const completion = await openai.chat.completions.create({
        model,
        messages: current_messages
    })
    console.log(completion)
}

// step 2 - create content for the api (give it some personality)

// step 3 - define the function to retrieve the api message based on user input

// step 4 - create a run function that requests 

async function run() {
    await sendPrompt(messages)
}

run()