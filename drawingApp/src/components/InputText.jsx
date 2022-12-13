import React,{useState,useEffect} from 'react'
import { InputAgregarDibujo } from './styles/Input'
import axios from 'axios'
import { BotonesInteractivos } from './styles/Button';
import { Queue, Stack } from './styles/Contendor';


const URL = "http://localhost:3000/api/dibujos"
export const InputText = (props) => {  

  const [ insertarDibujo, setInsertarDibujo] = useState('');

  const changeDibujo = (e) => {
    setInsertarDibujo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const crearDibujo = async() => {
    axios.post(URL, {
      nombre: insertarDibujo
    }).then((response) => {
      props.valor(insertarDibujo);
      setInsertarDibujo('');
      
    })
  }
  return (
        
          <form onSubmit={handleSubmit}>
            <Queue>
            <InputAgregarDibujo
              placeholder='Nombre nuevo dibujo'
              value={insertarDibujo}
              onChange={changeDibujo}
            />
            <BotonesInteractivos onClick={crearDibujo}>
              <i className='bx bx-add-to-queue'></i>
            </BotonesInteractivos>
            </Queue>
          </form>
  )
}
