import express from 'express'
import { apiRouter } from './routers/api/apiRouter.js'


export const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api', apiRouter)