import './App.css'
import Home from './components/Home'
import { Header } from './components/styles/Contendor'

function App() {

  return (
    <>
      <Header> Aplicación de dibujo </Header>

      <div className="App">
        <Home/>
      </div>
    </>
  )
}

export default App
