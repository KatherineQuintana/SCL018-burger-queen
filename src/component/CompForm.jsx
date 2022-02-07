import React, { useState } from 'react';

const CompForm = () => {

  const [data, setData] = useState ({
    client:'',
    table:''
  })

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  const sendData = (event) => {
    event.preventDefault();
    console.log(data.client + '' + data.table)
  }

  return <div>
            <form className="row g-3" onSubmit={sendData}>
        <hr />
        <div className="col-auto">
          <label id="nameForm" className="visually-hidden">Nombre</label>
          <input 
          className="form-control" 
          type="text" 
          name='client' 
          placeholder="Nombre" 
          aria-label="default input example"
          onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-auto">
          <label id="tableForm" className="visually-hidden">Mesa</label>
          <input className="form-control" 
          type="number" 
          name='table' 
          placeholder="Mesa" 
          aria-label="default input example"
          onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Enviar datos</button>
        </div>
      </form>
      <h1>Una sonrisa te alegrará a tí y a {data.client}</h1>
  </div>;
};

export default CompForm;
