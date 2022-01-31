import React from 'react'
import { Link } from "react-router-dom";

const Kitchen = () => {
    return (
        <div className='container mt-5'>
            <p>Aqui va la cocina</p>
            <Link to="/Home" className='btn btn-outline-primary'> Home </Link>
           <Link to="/Waiters" className='btn btn-outline-primary'> Pedidos </Link>
           <hr/>
           
        </div>
    )
}

export default Kitchen

/* {           
    order && order.bebidas.map(menu => (
        <><img id="imgMenu" key={menu.id} src={menu.img}></img>
        <li> {menu.bebestible} {menu.valor} </li></>
    ))
} */

