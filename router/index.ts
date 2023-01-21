import { Router } from "express";
import requestsController from "../requests/requests.controller";

const router = Router()

router.post('/bot-send', requestsController.sendOne)

export default router