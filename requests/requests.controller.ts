import { Request, Response } from "express"
import { bot } from ".."

class RequestsController {
    async sendOne(req: Request, res: Response) {
        const { text } = req.body

        if (!text) {
            res.status(404).json({status: false})

            return
        }

        console.log(process.env.channelId)

        bot.sendMessage(process.env.channelId as string, text)
        res.status(200).json({status: true})
    }
}

export default new RequestsController()