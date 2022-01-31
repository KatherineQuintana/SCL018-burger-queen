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


        </div>
    )
}

export default Waiters
