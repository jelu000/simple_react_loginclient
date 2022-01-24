
import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

 

export default function Login( {setToken}) {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

 
  
  const handleSubmit = async e => {
    e.preventDefault();
    
    console.log(`username: ${username}, password: ${password}`)

    const token = await loginUser({
      username,
      password
    });

    //console.log(`Login-token: ${token.reason} token ${!token}`)
    if (token.reason === "INVALID_USER_AUTHENTICATION"){
      alert(`${token.reason}: ${token.message}`);
    }
      
    setToken(token);
  }

  const inputUnameChange = (evt) =>{

    console.log(`input= ${evt.target.value}`)
    setUserName(evt.target.value);
  }

  const inputPasswordChange = (evt) =>{


    console.log(`input= ${evt.target.value}`)
    setPassword(evt.target.value);
  }

  

  return (
  <div className="login-wrapper">
    <h1>Please Log In</h1>
      
    <form onSubmit={handleSubmit}>
        <label>
        <p>Username</p>
        <input type="text" id="input_username" value={username} onChange={inputUnameChange} />
        </label>
        <label>
        <p>Password</p>
        <input type="password" id="input_password" value={password} onChange={inputPasswordChange}  />
        </label>
        <div>
        <button type="submit">Submit</button>
        </div>
    </form>
  </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
