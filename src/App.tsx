import './App.css'
import Calculator from './Calculator'
import useCalculator from './hooks/useCalculator'

function App() {

    const {text, asignarValore, limpiarDatos, calcular} = useCalculator()


  return (
    <>
      
      <Calculator
        text={text}
        asignarValore={asignarValore}
        limpiarDatos={limpiarDatos}
        calcular={calcular}
      >

      </Calculator>

    </>
  )
}

export default App
