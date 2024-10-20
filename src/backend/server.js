import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import movies from "./routes/movies.js";

const app = express()
dotenv.config()
app.use(cors())

const PORT = process.env.PORT || 5000

app.use('/movies', movies)

app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})