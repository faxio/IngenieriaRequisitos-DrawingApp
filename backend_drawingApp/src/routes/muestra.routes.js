import {Router} from 'express'

const router = Router()

router.get( '/secreto', (req,res) => {
    res.send("aquí no es :(")
})
router.get( '/secreto/2', (req,res) => {
    res.send("Me descubriste no hay secreto. :C")
})

export default router;