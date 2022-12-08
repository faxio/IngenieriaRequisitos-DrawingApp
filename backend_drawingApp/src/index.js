import express from "express";
import { pool} from './db.js'
import routerDibujos from "./routes/dibujos.routes.js";
import cors from 'cors'

const App = express();

App.use(express.json())
App.use(cors())

App.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT 1 + 1 AS result');
    res.json(result)
})

App.use("/api",routerDibujos);

App.listen(3000);