import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const SignIn = () => {
  const [activeTab, setActiveTab] = useState('signin');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home'); 
  };

  return (
    <div className="auth-container">
      <h2>Welcome to ExamGrade</h2>
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'signin' ? 'active' : ''}`}
          onClick={() => setActiveTab('signin')}
        >
          Sign In
        </div>
        <div
          className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </div>
      </div>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
