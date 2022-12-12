import {Router} from 'express'
import { getDibujos, createDibujo, editarDibujo,eliminarDibujo, getDibujosID } from '../controllers/dibujos.controller.js'

const router = Router()

router.get( '/dibujos',getDibujos)

router.get( '/dibujos/:id',getDibujosID)

router.post( '/dibujos', createDibujo)

router.put( '/dibujos/:id',editarDibujo);

router.delete( '/dibujos/:id',eliminarDibujo);

export default router;