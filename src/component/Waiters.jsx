/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


const Waiters = () => {
  //const perfect = 'Aqui se debe pedir';

  const [order, setOrder] = useState(null);

  useEffect(() => {
    console.log('useEffect')
    extractData()
  }, [])

  const extractData = async () => {
    const data = await fetch('./menu.json')
    const dataUser = await data.json()
    console.log(dataUser)
    setOrder(dataUser)
  }


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
              <hr />
              <li className="nav-item">
                <Link to="/Kitchen" className="btn btn-primary btn-lg"> Cocina </Link>
              </li>
              <hr />
              <li className="nav-item">
                <Link to="" className="btn btn-primary btn-lg"> Carro </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />

      {/* Formulario */}

      <form className="row g-3">
        <hr />
        <div className="col-auto">
          <label id="nameForm" className="visually-hidden">Nombre</label>
          <input className="form-control" type="text" placeholder="Nombre" aria-label="default input example"></input>
        </div>
        <div className="col-auto">
          <label id="tableForm" class="visually-hidden">Mesa</label>
          <input className="form-control" type="text" placeholder="Mesa" aria-label="default input example"></input>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Enviar datos</button>
        </div>
      </form>

      {/* vista para el menú */}

      <div className="accordion" id="accordionPanelsStayOpenExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
              <strong>Menú bebidas</strong>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">

              {/* vista de las bebidas*/}
              {order && order.bebidas.map(menu => (
                <><></><div className="card mb-3" key={menu.id}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={menu.img} class="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                      <div className='card-body'>
                        <h1 className="card-title">{menu.bebestible}</h1>
                        <strong><p className="card-text">{"$"}{menu.valor}</p></strong>
                        <p className="card-text"><small class="text-muted">{menu.description}</small></p>
                        <button type="button" className="btn btn-outline-primary">Agregar</button>
                      </div>
                    </div>
                  </div>
                </div>
                  <hr /></>
              ))}

            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              <strong>Menú comidas</strong>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              Aquí se ingresarán las comidas que aún no se cuales serán
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              <strong>Menú juegos</strong>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">

              {/* vista de los juegos*/}
              {order && order.boardgame.map(menu => (
                <><></><div class="card mb-3" key={menu.id}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={menu.img} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                      <div className='card-body'>
                        <h1 className="card-title">{menu.juego}</h1>
                        <p className="card-text">{menu.description}</p>
                        <p className="card-text">{menu.jugadores}</p>
                        <p className="card-text">{menu.duracion}</p>
                        <button type="button" className="btn btn-outline-primary">Agregar</button>
                      </div>
                    </div>
                  </div>
                </div>
                  <hr /></>
              ))}


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Waiters
