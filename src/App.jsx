import './App.css'
import ComponenteA from './components/ComponenteA';
import ComponenteB from './components/ComponenteB';

function App() {

  const miEmoji = "✈"
  const miBoton = "Buscar destino"

  const manejarClick = () => {
    alert("Click en componente padre")
  }

  return (
    <>
      <div className='box'>
        <ComponenteA
          emoji={miEmoji}
          titulo="Viajes Aventura"
        />
        <ComponenteB
          textoBtn= {miBoton}
          onClick={manejarClick}
        />
      </div>
    </>
  )
}

export default App
