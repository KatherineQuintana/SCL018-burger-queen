/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react'
import CompForm from './CompForm';
import Navbar from './Navbar';


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

    <div className='container mt-5'>

      {/* Barra de navegación */}
      <Navbar></Navbar>
      <hr />

      {/* Formulario */}
      <CompForm></CompForm>

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
