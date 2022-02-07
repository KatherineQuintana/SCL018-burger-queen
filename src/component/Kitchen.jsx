import React from 'react'
import Navbar from './Navbar'


const Kitchen = () => {
  return (
    <div className='container mt-5'>
      {/* Barra de navegación */}
      <Navbar></Navbar>

      <hr />
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

