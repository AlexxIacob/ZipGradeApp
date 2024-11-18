import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css'; 

const HomePage = () => {
  const navigate = useNavigate();

  const handleCreateTest = () => {
    navigate("/creare-test");
  };

  const handleTestHistory = () => {
    alert('Navighează la Istoric Teste');
  };

  const handleCheckTests = () => {
    alert('Navighează la Verificare Teste');
  };

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <div className="homepage-container">
      <h1>Feel free to create your exam!</h1>
      <p>Select an option below:</p>
      <div className="button-container">
        <button className="home-button" onClick={handleCreateTest}>
          Create Exams
        </button>
        <button className="home-button" onClick={handleTestHistory}>
          Exams History
        </button>
        <button className="home-button" onClick={handleCheckTests}>
          Verifiy Exams
        </button>
      </div>
      <div className="logout-container">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
