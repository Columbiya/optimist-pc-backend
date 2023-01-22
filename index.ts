import express, { Express, json, Request, Response } from 'express'
import dotenv from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'
import router from './router'
import cors from 'cors'

dotenv.config()
 
const app: Express = express()
app.use(cors())
app.use(json())
app.use("/api", router)

const port = 5000
const token = process.env.TOKEN

export const bot = new TelegramBot(token ? token: "", {polling: true})

bot.on('message', message => {
    const chatId = message.chat.id
    
    bot.sendMessage(chatId, message.text as string)
})

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})