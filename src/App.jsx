import './App.css'
import ComponenteA from './components/ComponenteA';
import ComponenteB from './components/ComponenteB';
import { useState, useCallback } from 'react';

function App() {

  const miEmoji = "✈"
  const miBoton = "Buscar destino"

  const manejarClick = () => {
    setMensaje("Listo para viajar")
  }

  const [mensaje, setMensaje] = useState("Viajes Aventura");

  const callback = useCallback(

    (datos)=>{
      setMensaje(datos)
    }, [mensaje]
  )

  return (
    <>
      <div className='box'>
        <ComponenteA
          emoji={miEmoji}
          titulo={mensaje}
        />
        <ComponenteB
          textoBtn= {miBoton}
          onClick={manejarClick}
        />
        <ComponenteB
          textoBtn= "Callback"
          onClick={callback}
        />
      </div>
    </>
  )
}

export default App
