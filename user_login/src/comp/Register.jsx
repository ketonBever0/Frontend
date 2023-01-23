import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/react-toastify.css';

function Register() {

  const navigate = useNavigate();


  const sendData = (formData, method) => {

    fetch('http://localhost:8000/api/user/register', {
      method: method,
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json)
      .then(token => sessionStorage.setItem('usertoken', token))
      .catch(err => console.log(err));


  }


  const onSubmit = (e) => {
    e.preventDefault();


    sendData(FormData, 'POST');


    navigate('/login');

  }

  let formObj = {};

  formObj = {
    username: "",
    password: "",
    passwordAgain: "",
    email: "",
    age: ""
  }

  const [FormData, setFormData] = useState(formObj);

  const writeData = (e) => {

    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  }





  return (
    <div className="form-control w-full max-w-xs">

      <h2 className="text-4xl text-center mt-5 mb-12 font-bold">Regisztráció</h2>

      <div className="flex flex-col justify-center items-center">

        <form onSubmit={onSubmit}>

          <label className="label">
            <span className="label-text">Felhasználói név</span>
            <span className="label-text-alt">*</span>
          </label>
          <input required id='username' value={FormData.username} onChange={writeData} type="text" placeholder="Felhasználónév" className="input input-bordered input-primary w-full max-w-xs mt-6" />

          <label className="label">
            <span className="label-text">E-mail cím</span>
          </label>
          <input required id='email' value={FormData.email} onChange={writeData} type="text" placeholder="E-mail cím" className="input input-bordered input-primary w-full max-w-xs mt-6" />

          <label className="label">
            <span className="label-text">Jelszó</span>
            <span className="label-text-alt">Legalább X karakter</span>
          </label>
          <input required id='password' value={FormData.password} onChange={writeData} type="password" placeholder="Jelszó" className="input input-bordered input-primary w-full max-w-xs mt-6" />

          <label className="label">
            <span className="label-text">Jelszó újra</span>
          </label>
          <input required id='passwordAgain' value={FormData.passwordAgain} onChange={writeData} type="password" placeholder="Jelszó újra" className="input input-bordered input-primary w-full max-w-xs mt-6" />

          <label className="label">
            <span className="label-text">Életkor</span>
          </label>
          <input type="text" id='age' value={FormData.age} onChange={writeData} placeholder="Életkor" className="input input-bordered input-primary w-full max-w-xs mt-6" />


          <div className="w-full max-w-xs">
            <button type="submit" className="btn btn-primary mt-5 mx-10">Regisztráció</button>
          </div>


        </form>

      </div>



    </div>
  )
}

export default Register