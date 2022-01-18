import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='container mt-5'>
           <h1>Bienvenidos</h1> 
           <Link to="/Waiters" className='btn btn-outline-success'> Pedidos </Link>
           <Link to="/Kitchen" className='btn btn-outline-success'> Cocina </Link>
        </div>
    )
}

export default Home
