import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


const Waiters = () => {
    const perfect = 'Aqui se debe pedir';

    const [order, setOrder] = useState(null);

    useEffect(() =>{
        console.log ('useEffect')
        extractData()
    },[])

    const extractData = async () => {
        const data = await fetch('./menu.json')
        const dataUser = await data.json()
        console.log(dataUser)
        setOrder(dataUser)
    }


    return (
        <div className='container mt-5'>
            <p>{perfect}</p>
            <Link to="/Home" className='btn btn-outline-success'> Home </Link>
           <Link to="/Kitchen" className='btn btn-outline-success'> Cocina </Link>
           <ul>
               {
                   
                   order && order.bebCalientes.map(menu => (
                       <li key={menu.id}> {menu.valor}</li>
                   ))
               }
           </ul>
        </div>
    )
}

export default Waiters
