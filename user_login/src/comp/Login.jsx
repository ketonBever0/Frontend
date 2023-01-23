import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Login() {

  const navigate = useNavigate();

  const sendData = (formData, method) => {

    fetch('http://localhost:8000/api/user/login', {
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

    try {
      sendData(FormData, 'POST');
    } catch {
      console.log("Nem sikerült!");
    }
    navigate('/');

  }




  let formObj = {};

  formObj = {
    username: "",
    password: ""
  }


  const [FormData, setFormData] = useState(formObj);

  const writeData = (e) => {

    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  }




  return (
    <div className="form-control w-full max-w-xs">

      <h2 className="text-4xl text-center mt-5 mb-12 font-bold">Bejelentkezés</h2>

      <div className="flex flex-col justify-center items-center">

        <form onSubmit={onSubmit}>


          <label className="label">
            <span className="label-text">Felhasználónév</span>
          </label>
          <input required id='username' value={FormData.username} onChange={writeData} type="text" placeholder="Felhasználónév" className="input input-bordered input-primary w-full max-w-xs mt-6" />


          <label className="label">
            <span className="label-text">Jelszó</span>
          </label>
          <input required id='password' value={FormData.password} onChange={writeData} type="password" placeholder="Jelszó" className="input input-bordered input-primary w-full max-w-xs mt-6" />




          <div className="w-full max-w-xs">
            <button type="submit" className="btn btn-primary mt-5 mx-10">Bejelentkezés</button>
          </div>


        </form>

      </div>



    </div>
  )
}

export default Login