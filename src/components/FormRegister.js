// importar react
import React, { useState, useEffect } from 'react'

const FormRegister = (props) => {

  const [name, setName] = useState('name');
  const [lastname, setLastName] = useState('surname');
  const [email, setEmail] = useState('email');
  const [address, setAddress] = useState('addres');
  const [contact, setContact] = useState('contact');
  // Variáveis de captura de dados
  const initialFielsValues = {
    firstname: '',
    surname: '',
    address: '',
    contact: '',
    email: ''
  }

  const [state, setState] = useState({ name: "", surname: "", email: "", address: "", contact: "" });
  const handleChange = e => {
      const { name, value } = e.target;
      setState(prevState => ({
        ...prevState,
        [name]: value
      }));
  };


  const inputHandlerSend = e => {
    console.log(state)
    e.preventDefault() // evitar reload de página
    props.addEdit(state)
  }


  return (
    <form autoComplete="off" onSubmit={inputHandlerSend}>
      {/* name */}
      <div className="row">
      <div className="form-group input-group mb-3 col">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input className="form-control" placeholder="Nome" name="name" value={state.name} onChange={handleChange}/>
      </div>

      {/* surname */}
        <div className="form-group input-group mb-3 col">
          <div className="input-group-prepend">
            <div className="input-group-text">
            <i className="fas fa-user"></i>
            </div>
          </div>
          <input className="form-control" placeholder="Sobrenome" name="surname" value={state.surname} onChange={handleChange}/>
        </div>
        

        {/* email */}
        <div className="row">
      <div className="form-group input-group mb-3 col">
        <div className="input-group-prepend">
          <div className="input-group-text">
          <i className="fas fa-envelope"></i>
          </div>
        </div>
        <input className="form-control" placeholder="Email" name="email" value={state.email} onChange={handleChange}/>
      </div>

        {/* contact */}
        <div className="form-group input-group mb-3 col">
          <div className="input-group-prepend">
            <div className="input-group-text">
            <i className="fas fa-phone"></i>
            </div>
          </div>
          <input className="form-control" placeholder="Telefone" name="contact" value={state.contact} onChange={handleChange}/>
        </div>
      </div>

      {/* addres */}
      <div className="form-group input-group mb-3 mx-auto col">
          <div className="input-group-prepend">
            <div className="input-group-text">
            <i className="fas fa-house"></i>
            </div>
          </div>
          <input className="form-control" placeholder="Endereço" name="address" value={state.address} onChange={handleChange}/>
        </div>
      </div>

      <div className="form-group">
        <input type="submit" value="Salvar" className="btn btn-secondary btn-block" />
      </div>
    </form>
  )

  
}

export default FormRegister