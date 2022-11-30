import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import workspaceModel from '../models/workspaceModel'

const router = express.Router()

const jsonParser = bodyParser.json()

router.post(
    '/createWorkspace',
    jsonParser,
    async (req: Request, res: Response) => {
        const { name, userId } = req.body

        const newWorkspace = new workspaceModel({ name, userId })

        const createdWorkspace = await newWorkspace.save()

        res.send({ workspaceId: createdWorkspace.id })
    }
)

export default router
