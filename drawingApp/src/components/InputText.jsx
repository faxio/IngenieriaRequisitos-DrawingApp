import React,{useState,useEffect} from 'react'
import { InputAgregarDibujo } from './styles/Input'
import axios from 'axios'
import { BotonesInteractivos } from './styles/Button';


const URL = "http://localhost:3000/api/dibujos"
export const InputText = (props) => {  

  const [ insertarDibujo, setInsertarDibujo] = useState('');

  const changeDibujo = (e) => {
    e.preventDefault();
    setInsertarDibujo(e.target.value)
    
  }
  const crearDibujo = () => {
    axios.post(URL, {
      nombre: insertarDibujo
    }).then((response) => {
      props.valor(insertarDibujo);
      setInsertarDibujo('');
      
    })
  }
  return (
        <div>
            <InputAgregarDibujo
              placeholder='Nombre dibujo'
              value={insertarDibujo}
              onChange={changeDibujo}
            />
            <BotonesInteractivos onClick={crearDibujo}>
            <i className='bx bx-add-to-queue'></i>
          </BotonesInteractivos>
          </div>
  )
}
