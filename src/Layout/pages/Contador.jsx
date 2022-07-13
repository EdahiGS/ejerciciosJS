import { useState, useEffect } from 'react'


const Contador = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (count % 2 === 0) {

            document.querySelector('.contenedor').style.backgroundColor = 'black'
            document.querySelector('.titulo').style.color = 'white'

        } else {

            document.querySelector('.contenedor').style.backgroundColor = 'white'
            document.querySelector('.titulo').style.color = 'black'

        }

    }, [count])

    return (
        <>
            <div className='contenedor'>
                <h1 className='titulo'>Contador de {count}</h1>
                <button className='boton' type='button' onClick={() => setCount(count + 1)}>El numero es: {count}</button>
            </div>
        </>
    )
}

export default Contador