import React from 'react'
import { Link } from "react-router-dom";

const Kitchen = () => {
    return (
        <div className='container mt-5'>
            <p>Aqui va la cocina</p>
            <Link to="/Home" className='btn btn-outline-success'> Home </Link>
           <Link to="/Waiters" className='btn btn-outline-success'> Pedidos </Link>
        </div>
    )
}

export default Kitchen
