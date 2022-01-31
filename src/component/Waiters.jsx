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
            <Link to="/Home" className='btn btn-outline-primary'> Home </Link>
           <Link to="/Kitchen" className='btn btn-outline-primary'> Cocina </Link>
           <hr/>
           <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Waiters
