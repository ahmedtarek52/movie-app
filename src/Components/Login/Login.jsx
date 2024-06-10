import axios from 'axios';
import Joi from 'joi';
import React, { useState, useCallback } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';

const loginSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().required(),
  confirmpassword: Joi.ref('password'),
});

export default function Login({ saveUserData }) {
  const [errorList, setErrorList] = useState([]);
  const [error, setError] = useState('');
  const [isLoding, setIsLoding] = useState(false);
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const getUserData = useCallback(debounce((eventInfo) => {
    const { name, value } = eventInfo.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  }, 300), []);

  async function sendLoginToApi() {
    try {
      let { data } = await axios.post('https://donation-system-utjy.onrender.com/Login', user);
      setIsLoding(false);
      if (data.success) {
        localStorage.setItem('userToken', data.token);
        saveUserData();
        navigate('/');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setIsLoding(false);
      setError('An error occurred. Please try again later.');
    }
  }

  function submitLoginForm(e) {
    e.preventDefault();
    setIsLoding(true);

    const validation = loginSchema.validate(user, { abortEarly: false });
    if (validation.error) {
      setIsLoding(false);
      setErrorList(validation.error.details);
    } else {
      sendLoginToApi();
    }
  }

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Login</title>
        </Helmet>

        {errorList.map((err, index) => (
          <div key={index} className="alert alert-danger my-2">
            {err.context.label === "password" ? "password invalid" : err.message}
          </div>
        ))}

        {error && <div className="alert alert-danger my-2">{error}</div>}

        <form onSubmit={submitLoginForm} className='mt-5'>
          <label htmlFor="email" className='text-white'>email:</label>
          <input onChange={getUserData} type="email" className='form-control my-input my-2' name='email' id="email"></input>

          <label htmlFor="password" className='text-white'>password:</label>
          <input onChange={getUserData} type="password" className='form-control my-input my-2' name='password' id="password"></input>
          
          <button type='submit' className='btn btn-info'>
            {isLoding ? <i className='fas fa-spinner fa-spin'></i> : 'Login'}
          </button>
        </form>
      </>
    </HelmetProvider>
  );
}
