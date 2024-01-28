// SignUp.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import './SignUp.css';
import Footer from './Footer';
function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const userInfo = { username, email, password };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    navigate('/signin');
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <label>
            <FiUser /> Username:
          </label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

          <label>
            <FiMail /> Email:
          </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>
            <FiLock /> Password:
          </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default SignUp;
