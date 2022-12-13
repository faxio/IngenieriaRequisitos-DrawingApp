import './App.css'
import Home from './components/Home'
import { Header, Queue, Texto } from './components/styles/Contendor'
import { InputAgregarDibujo } from './components/styles/Input'

function App() {

  return (
    <>
      <Header>
          <Texto>Aplicación de dibujo</Texto> 
          <InputAgregarDibujo
            placeholder='Search......'
          />
      </Header>
        
      <div className="App">
        <Home/>
      </div>
    </>
  )
}

export default App
