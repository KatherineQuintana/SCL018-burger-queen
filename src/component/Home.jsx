import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div id='home' className='container text-center vh-100'>
           <h1>Bienvenidos</h1>
           <section className='text-center'>
           <Link to="/Waiters"> <button type="button" class="btn btn-primary btn-lg">Pedidos</button></Link>
           <Link to="/Kitchen"> <button type="button" class="btn btn-primary btn-lg">Cocina</button> </Link>  
           </section>
        </div>
    )
}

export default Home
