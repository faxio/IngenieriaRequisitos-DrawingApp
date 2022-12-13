import express from "express";
import routerDibujos from "./routes/dibujos.routes.js";  //importación de rutas
import routerMuestra from "./routes/muestra.routes.js"
import cors from 'cors' 

//Crear aplicación express
const App = express();

//Permite la analización de entrada en formato json
App.use(express.json())

//Habilitación de cors 
App.use(cors())

//Trar end-points que esten disponible en la ruta localhost:3000/api/
App.use("/api",routerDibujos);

App.use("/otraruta",routerMuestra);
//Crear listener en el puerto 3000
App.listen(3000);