import React from 'react'
import { Link } from "react-router-dom";

const Kitchen = () => {
    return (
      //Navbar
      <div className='container mt-5'>
      <nav className="navbar navbar-expand-lg fixed-top navbar navbar-dark bg-primary">
<div className="container-fluid">
<strong className="navbar-brand" >Algún nombre</strong>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
 <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
 <ul className="navbar-nav">
   <li className="nav-item">
   <Link to="/Home" className="btn btn-primary btn-lg"> Home </Link>
   </li>
   <hr/>
   <li className="nav-item">
   <Link to="/Waiters" className="btn btn-primary btn-lg"> Pedidos </Link>
   </li>
   <hr/>
   <li className="nav-item">
   <Link to=""className="btn btn-primary btn-lg"> carro </Link>
   </li>
 </ul>
</div>
</div>
</nav>
<hr/>
         <h1>Aqui irán las ordenes</h1>  
        </div>
    )
}

export default Kitchen
/* 
      {           
    order && order.bebidas.map(menu => (
        <><img id="imgMenu" key={menu.id} src={menu.img}></img>
        <li> {menu.bebestible} {menu.valor} </li></>
    ))} */

