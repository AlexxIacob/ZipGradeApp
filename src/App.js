import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/Login';
import SignUp from './components/Signup';
import TermsAndConditions from './components/TermsAndConditions';
import HomePage from './components/HomePage';
import CreareTest from './components/CreareTest';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/creare-test" element={<CreareTest />} />
      </Routes>
    </Router>
  );
};

export default App;
