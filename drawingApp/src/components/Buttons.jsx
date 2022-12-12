import React,{useState, useEffect} from 'react'
import { BotonApp } from './styles/Button'
import axios from 'axios'

const URL = "http://localhost:3000/api/dibujos/"

export const Buttons = (props) => {

    const [ botones, setBotones] = useState(null);
    const [ color, setColor] = useState(props.color)
 
    useEffect(() => {
        axios.get(URL+props.id).then((response) => {
          setBotones(response.data);
        })
      },[botones])
      if (!botones) return null;
    
      /*
    const sizeX = 20
    const sizeY = 20


    const creacion = (sizeX, sizeY) => {
        let matriz = [];

        for (let i=0; i< sizeX*sizeY; i++){
            matriz.push(0)
        }
        return matriz;
    }
    const size = creacion(sizeX,sizeY);
    */

    const click = (e,x,y) => {
        axios
            .put(`${URL+props.id}`, {
                pos: x,
                color: props.value,
            }).then(response => {
                console.log("Actualizado")
            })
    }
    return (
        <div>
            {botones.map(boton => {
                return (
                     <BotonApp 
                        key={boton.pos} 
                        color={boton.color}
                        onClick={(e) => click(e, boton.pos, boton.color)}>
                     </BotonApp>
                     )
            })}
        </div>
    )
}
