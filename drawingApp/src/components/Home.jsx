import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from "axios";

import { ContenedorCard } from './styles/Contendor';

import { InputText } from './InputText';

const URL = "http://localhost:3000/api/dibujos"

const Home = () => {

  const [ dibujos, setDibujos] = useState(null);
  const [ actualizar, setActualizar] = useState("x");

  useEffect(() => {
    axios.get(URL).then((response) => {
      setDibujos(response.data);
    })
  },[actualizar])
  if (!dibujos) return null;

  return (
    <>

      <ContenedorCard>

            <InputText valor={setActualizar}></InputText>

          {dibujos.map((dibujo) => {
            return (
            <Card 
              nombre={dibujo.nombre} 
              id={dibujo.ID} 
              key={dibujo.ID}
              valor={setActualizar}
            />
            )
          })}
          {dibujos.length < 1? 
             (<><h1>No hay ningun dibujo</h1> <h2>Agregue uno por favor</h2></>): ""}
          
      </ContenedorCard>
    </>
  )
}

export default Home;