// importar react
import React from 'react'
import FormRegister from './FormRegister'
import fireDb from '../database/firebase'


const Register = () => {

  const addEdit = obj => {
    fireDb.child('clientes').push(
      obj,
      error => {
        if(error) {
          console.log(error)
        }
      })
  }

  return (

    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container bg-light p-4 rounded my-4">
          <h1 className="display-">Web Cadastro</h1>
          <p className="lead">This is a modified jumbotron that its parent.</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
              <FormRegister addEdit={addEdit}/>
          </div>
          <div className="col">
            <h2>Lista de clientes</h2>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Register