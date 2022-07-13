import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
const MainLayout = () => {
    return (
        <>
            <h1 className='layoutTitle'>Proyectos de <span>Ejemplo</span></h1>

            {/* Links para el Menu */}
            <div className='menus'>
                <Link className='menu' to={"/contador"}>Contador</Link>
                <Link className='menu' to={"/calculadora"}>Calculadora</Link>
                <Link className='menu' to={"/galeria"}>Galeria</Link>
                <Link className='menu' to={"/ejemplo-api"}>Consumo de API</Link>
            </div>

            {/* La posicion de los otros jsx */}
            <Outlet />
        </>

    )
}

export default MainLayout