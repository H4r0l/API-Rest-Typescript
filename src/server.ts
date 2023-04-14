import "dotenv/config"
import express from 'express'
import cors from 'cors'
import { router } from './routes'
import db from "./config/mongo"

const PORT = process.env.PORT || 3002;
const app = express()

app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(router)

db().then(() => console.log("Connected succesfully"))
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))
