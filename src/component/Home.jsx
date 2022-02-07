import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="card bg-dark text-white">
            <img src="https://user-images.githubusercontent.com/89401079/150342945-4c670cb3-759a-45f9-88f2-83ca6cf6b65c.jpg" className="card-img row-fluid" alt="..."></img>
            <div className="card-img-overlay">
                <h1 className='text-center'>Bienvenidos</h1>
                <section className='text-center'>
                    <Link to="/Waiters"> <button type="button" className="btn btn-primary btn-lg">Pedidos</button></Link>
                    <Link to="/Kitchen"> <button type="button" className="btn btn-primary btn-lg">Cocina</button> </Link>
                </section>
            </div>
        </div>
    )
}

export default Home
