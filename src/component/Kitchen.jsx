import React from 'react'
import { Link } from "react-router-dom";

const Kitchen = () => {
    return (
      //Navbar
      <div className='container mt-5'>
      <nav class="navbar navbar-expand-lg fixed-top navbar navbar-dark bg-primary">
<div class="container-fluid">
<strong class="navbar-brand" >Algún nombre</strong>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
 <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
 <ul class="navbar-nav">
   <li class="nav-item">
   <Link to="/Home" class="btn btn-primary btn-lg"> Home </Link>
   </li>
   <hr/>
   <li class="nav-item">
   <Link to="/Waiters" class="btn btn-primary btn-lg"> Pedidos </Link>
   </li>
   <hr/>
   <li class="nav-item">
   <Link to=""class="btn btn-primary btn-lg"> carro </Link>
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

