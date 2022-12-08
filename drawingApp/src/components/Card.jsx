import React, { useState } from 'react'
import { Buttons } from './Buttons'
import { ContenedorCuadrilla, ContenedorDraw, Stack } from './styles/Contendor'
import { BotonesInteractivos, Icons, InputInteractivo } from './styles/Button'
import axios from 'axios'

const URL = "http://localhost:3000/api/dibujos"

const Card = (props) => {

    const [color, setColor] = useState("#FF0000")
    const changeColor = (e) => {
        e.preventDefault();

        setColor(e.target.value)
    }

    const eliminarDibujo = async()=> {
        axios
        .delete( `${URL}/${props.id}`)
        .then(
            props.valor("eliminado")
        )
    }

    return (
        <> 
            <ContenedorDraw> 

                <Stack>
                    <InputInteractivo
                        type="color"
                        value={color}
                        onChange={changeColor}
                    />

                </Stack>

                <div>
                    <ContenedorCuadrilla>
                        <Buttons/>
                        
                    </ContenedorCuadrilla>
                    <p>{props?.nombre}</p>
                </div>
                <Stack>
                    <BotonesInteractivos> 
                        <i className='bx bx-save'></i>
                    </BotonesInteractivos>
                    <BotonesInteractivos>
                        <i className='bx bx-edit-alt' ></i>
                    </BotonesInteractivos>
                    <BotonesInteractivos onClick={eliminarDibujo}>
                        <i className='bx bx-message-square-x' ></i>
                    </BotonesInteractivos>
                </Stack>

            </ContenedorDraw>
        </>
    )
}

export default Card