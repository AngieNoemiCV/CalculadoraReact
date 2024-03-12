import { useState } from "react"


function App() {
  const [numeroUno, setNumeroUno] = useState(0);
  const [numeroDos, setNumeroDos] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleChangeUno = (event) => {
    setNumeroUno(event.target.value);
  }
  const handleChangeDos = (event) => {
    setNumeroDos(event.target.value);
  }

  const handlerSumar = (event) =>{
    setResultado(parseFloat(numeroUno) + parseFloat (numeroDos));
  }

  const handlerRestar = (event) =>{
    setResultado(parseFloat(numeroUno) - parseFloat (numeroDos));
  }

  const handlerMutiplicar = (event) =>{
    setResultado(parseFloat(numeroUno) * parseFloat (numeroDos));
  }

  const handlerDividir = (event) =>{
    setResultado(parseFloat(numeroUno) / parseFloat (numeroDos));
  }
  



  return (
    <>
   <h1>Calculadora</h1>

   <input 
      type="text" 
      placeholder="Numero 1" 
      value={numeroUno} 
      onChange={handleChangeUno} 
      />
  
   <input 
     type="text" 
      placeholder="Numero 2" 
      value={numeroDos} 
      onChange={handleChangeDos} 
    />
   <br />
   <br />
   <button onClick={handlerSumar}>Sumar</button>
   <button onClick={handlerRestar}>Restar</button>
   <button onClick={handlerMutiplicar}>Multiplicar</button>
   <button onClick={handlerDividir}>Dividir</button>
   <br />
   <p>Resultado:{resultado} </p>
   </>
  )
}

export default App
