import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import movies from "./routes/movies.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const app = express()
dotenv.config()
app.use(cors())

const PORT = process.env.PORT || 5000

app.use('/movies', movies)

// Serve static files from the React app
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, '../frontend/build')));

// The "catchall" handler: for any request that doesn't match the ones above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})