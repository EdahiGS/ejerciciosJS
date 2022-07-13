import React from 'react'

const Calculadora = () => {
  class Operaciones {
    constructor(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
    }

    Suma() {
      const resultado = this.num1 + this.num2
      return resultado
    }

    Resta() {
      const resultado = this.num1 - this.num2
      return resultado
    }

    Multiplicacion() {
      const resultado = this.num1 * this.num2
      return resultado
    }

    Division() {
      const resultado = this.num1 / this.num2
      return resultado
    }
  }


  function primerBoton() {

    // TOMAMOS LOS DOS VALORES DE LOS INPUTS
    const num1 = parseInt(document.querySelector('#num1').value);
    const num2 = parseInt(document.querySelector('#num2').value);

    // CREAMOS UN OBJETO PARA REALIZAR LAS OPERACIONES
    const operacion = new Operaciones(num1, num2);

    //VARIABLES
    let resultado = 0
    const textoResultado = document.querySelector('#resultadoFinal')

    //CREAMOS UN EVENTO PARA SABER QUE BOTON SE ESTA PRESIONANDO
    document.addEventListener('click', (e) => {
      let botonSeleccionado = e.target
      switch (botonSeleccionado.value) {
        case 'suma':
          resultado = operacion.Suma()
          textoResultado.textContent = resultado
          textoResultado.classList.remove('resultadoVacio')
          textoResultado.classList.add('resultadoCal')
          break
        case 'resta':
          resultado = operacion.Resta()
          textoResultado.textContent = resultado
          textoResultado.classList.remove('resultadoVacio')
          textoResultado.classList.add('resultadoCal')
          break
        case 'multi':
          resultado = operacion.Multiplicacion()
          textoResultado.textContent = resultado
          textoResultado.classList.remove('resultadoVacio')
          textoResultado.classList.add('resultadoCal')
          break
        case 'division':
          resultado = operacion.Division()
          textoResultado.textContent = resultado
          textoResultado.classList.remove('resultadoVacio')
          textoResultado.classList.add('resultadoCal')
          break
        case 'limpiar':
          textoResultado.textContent = ''
          document.querySelector('#num1').value = ''
          document.querySelector('#num2').value = ''
          textoResultado.classList.remove('resultadoCal')
          textoResultado.classList.add('resultadoVacio')
          break

      }
    })
  }

  return (
    <>
      <h1 className='tituloCalculadora'>Calculadora</h1>
      <div className='campos'>
        <input type="text" className='input' name="num1" id="num1" placeholder='Numero 1' />
        <input type="text" className='input' name="num2" id="num2" placeholder='Numero 2' />
        <button onClick={primerBoton} className='botonCal' value='suma'>Sumar</button>
        <button onClick={primerBoton} className='botonCal' value='resta'>Resta</button>
        <button onClick={primerBoton} className='botonCal' value='multi'>Multiplicacion</button>
        <button onClick={primerBoton} className='botonCal' value='division'>Division</button>
        <button onClick={primerBoton} className='botonCal' value='limpiar'>Limpiar Datos</button>
        <p id='resultadoFinal' className='resultadoVacio'></p>
      </div>
    </>
  )
}

export default Calculadora