import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return <div>
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
  </div>;
};

export default Navbar;
