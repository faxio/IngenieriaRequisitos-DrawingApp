import {pool} from '../db.js'
import { Dibujo } from '../model/Dibujo.js';

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
    let xString = ""
    for (let i = 0; i<400; i++){
        xString += "('" + row.insertId + "','" + i+ "'," + "'#FF0000'" + "),"
    }
    await pool.query('INSERT INTO Posiciones (id, pos, color) VALUES'+ xString.slice(0, xString.length -1))
    res.send({row})
}

export const editarDibujo = async(req, res) => {
    const {id} = req.params
    const {pos, color} = req.body
    await pool.query('UPDATE posiciones SET color = ? WHERE pos = ? AND id = ?',[color,pos,id])
    res.send("dibujo editado satisfactoriamente.. ");
}

export const eliminarDibujo = async(req, res) => {
    const id = req.params.id
    await pool.query('DELETE FROM posiciones WHERE id = ?', [id])
    const result = await pool.query('DELETE FROM DIBUJO WHERE id = ?', [id])
    res.send(result) 
}
