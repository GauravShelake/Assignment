import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSignup = async (e) => {
    try {
      e.preventDefault()
      const response = await axios.post('http://localhost:3001/auth/register', { name, username, password });
      alert('CREATED')
      setName('');
      setUsername('');
      setPassword('');

    } catch (error) {
      alert('Something went wrong')
    }
  }

  return (
    <div className='login-container'>
      <h2>Signup</h2>
      <form className="login-form" onSubmit={handleSignup} >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link className='navigate' to='/login'>Aleardy have account ?</Link>
      <br />
      <br />
      <button type='submit'>Signup</button>
      </form>
    </div>
  );
}


export default Signup;
