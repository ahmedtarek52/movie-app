import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export default function Login({saveUserData}) {
  const [errorList, seterrorList] = useState([])
  let navigate = useNavigate();
  const [error, setError] = useState('')
  const [isLoding, setisLoding] = useState(false)
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  function getUserData(eventInfo) {
    let myUser = { ...user };
    myUser[eventInfo.target.name] = eventInfo.target.value;
    setUser(myUser);
  }

  async function sendLoginToApi() {
    let { data } = await axios.post('https://donation-system-utjy.onrender.com/Login', user);
    if (data.success === true) {
      setisLoding(false);
      localStorage.setItem('userToken',data.token);
      saveUserData();
      navigate('/')
      // // login
    }
    else {
      setisLoding(false);
      setError(data.message);
    }
  }

  function submitLoginForm(e) {
    e.preventDefault();
    setisLoding(true);
    
    let validation = validateLoginform();
    // console.log(validation);
    if (validation.error) {
      setisLoding(false);
      seterrorList(validation.error.details);
      
    }
    else {
      sendLoginToApi();
    }
  }

  function validateLoginform() {
    let scheme = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().required(),
      confirmpassword:Joi.ref('password'),
     
    });
    // console.log(scheme.validate(user));
    return scheme.validate(user, { abortEarly: false });
  }

  return (<>

<Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
            </Helmet>
    
    {errorList.map((err,index)=> {
      if(err.context.label === "password"){
        return <div key={index} className=" alert alert-danger my-2">password invalid</div>
      }
      else{
       return <div key={index} className=" alert alert-danger my-2">{err.message}</div>
      }
    })}


    {error.length > 0 ? <div className=" alert alert-danger my-2">{error}</div> : ''}
    <form onSubmit={submitLoginForm} className='mt-5'>
    

      <label htmlFor="email" className='text-white'>email:</label>
      <input onChange={getUserData} type="email" className='form-control my-input my-2' name='email' id="email"></input>

      <label htmlFor="password" className='text-white'>password:</label>
      <input onChange={getUserData} type="password" className='form-control my-input my-2' name='password' id="password"></input>
      
      <button type='submit' className='btn btn-info'>
        {isLoding === true ? <i className='fas fa-spinner fa-spin'></i> : 'Login'}
      </button>
    </form>
  </>)
}