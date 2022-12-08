import React from 'react'
import { BotonApp } from './styles/Button'

export const Buttons = () => {

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

    return (
        <div>
            {size.map( (filas, index) => {
                return(
                    <BotonApp key={index} ></BotonApp>
                )
            })}

        </div>
    )
}
