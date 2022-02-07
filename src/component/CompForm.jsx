import React from 'react';

const CompForm = () => {
  return <div>
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
  </div>;
};

export default CompForm;
