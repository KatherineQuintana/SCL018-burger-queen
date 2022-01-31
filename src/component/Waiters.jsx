/* eslint-disable react/jsx-no-comment-textnodes */
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
      //Navbar
        <div className='container mt-5'>
           <nav class="navbar navbar-expand-lg fixed-top navbar navbar-dark bg-primary">
  <div class="container-fluid">
    <strong class="navbar-brand" >Navbar</strong>
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
        <Link to="/Kitchen" class="btn btn-primary btn-lg"> Cocina </Link>
        </li>
        <hr/>
        <li class="nav-item">
        <Link to=""class="btn btn-primary btn-lg"> carro </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

{/* vista para el menú */}

<div class="accordion" id="accordionPanelsStayOpenExample" >
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
        <strong>Menú bebidas</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        
        Aquí se ingresarán la data de bebidas
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <strong>Menú comidas</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
       Aquí se ingresarán las comidas que aún no se cuales serán
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        <strong>Menú juegos</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        Aquí se ingresarán los juegos que pueden ser prestados.
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Waiters
