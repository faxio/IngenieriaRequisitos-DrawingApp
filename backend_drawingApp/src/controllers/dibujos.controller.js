import {pool} from '../db.js'

export const getDibujos = async (req, res) => {
    const result = await pool.query("SELECT * FROM dibujo ORDER BY id DESC")
    res.json(result[0]);
} 
export const getDibujosID = async (req, res) => {
    //obtener id
    const id = req.params.id
    const [ row ] = await pool.query("SELECT * FROM dibujo JOIN Posiciones ON Posiciones.id = dibujo.id WHERE dibujo.id = ?", [id])
    res.json(row);
} 

export const createDibujo = async (req, res) => {


    const {nombre} = req.body
    const [row] = await pool.query('INSERT INTO Dibujo (nombre) VALUES (?)', [nombre])
    res.send({row})
}

export const editarDibujo = (req, res) => {
    res.send("dibujo editado satisfactoriamente.. ");
}

export const eliminarDibujo = async(req, res) => {
    const id = req.params.id
    const result = await pool.query('DELETE FROM DIBUJO WHERE id = ?', [id])
    res.send(result) 
}