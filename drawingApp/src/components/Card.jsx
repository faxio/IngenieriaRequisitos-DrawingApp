import React, { useState, useRef } from 'react'
import { Buttons } from './Buttons'
import { ContenedorCuadrilla, ContenedorDraw, Queue, Stack, QueueSpace } from './styles/Contendor'
import { BotonesInteractivos, Icons, InputInteractivo } from './styles/Button'
import axios from 'axios'
import { InputP } from './styles/Input'

const URL = "http://localhost:3000/api/dibujos"

const Card = (props) => {

    const colorActivado = "#06c364"
    const [color, setColor] = useState("#FF0000")
    const [ activar, setActivar] = useState(true)
    const [ nombre, setNombre] = useState(props.nombre)

    const changeColor = (e) => {
        e.preventDefault();

        setColor(e.target.value)
    }

    const cambiarNombre = (e) => {
        setNombre(e.target.value)
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
                        disabled={activar}
                    />
                </Stack>

                <div>
                    <ContenedorCuadrilla>
                        <Buttons value={color} id={props.id} disabled={activar}/>
                        
                    </ContenedorCuadrilla>
                    <QueueSpace>
                    <InputP
                        onChange={cambiarNombre}
                        value={nombre}
                    />
                        <BotonesInteractivos> 
                            <i className='bx bx-save'></i>
                        </BotonesInteractivos >
                    </QueueSpace>
                </div>
                <Stack>
                    <BotonesInteractivos onClick={ (e) => setActivar(!activar) } color={activar?  "" : colorActivado}>
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