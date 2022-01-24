import React from 'react'
import { Link } from "react-router-dom";


const Waiters = () => {
    const perfect = 'Aqui se debe pedir';


    return (
        <div className='container mt-5'>
            <p>{perfect}</p>
            <Link to="/Home" className='btn btn-outline-success'> Home </Link>
           <Link to="/Kitchen" className='btn btn-outline-success'> Cocina </Link>
        </div>
    )
}

export default Waiters
