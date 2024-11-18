import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email';
    if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    if (!formData.termsAccepted)
      newErrors.termsAccepted = 'You must accept the Terms and Conditions';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Account created successfully!');
      navigate('/');
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <div className="tabs">
        <div
          className="tab"
          onClick={() => navigate('/')}
        >
          SIGN IN
        </div>
        <div className="tab active">SIGN UP</div>
      </div>
      <form onSubmit={handleSignup}>
        <div className="input-group">
          <span className="icon">👤</span>
          <input
            type="text"
            name="fullName"
            placeholder="Full legal name"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>
        <div className="input-group">
          <span className="icon">📧</span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="input-group">
          <span className="icon">🔒</span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="terms-group">
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            By signing up, you agree to our&nbsp;
            <a href="/terms-and-conditions" target="_blank">
              Terms and Service
            </a>
          </label>
          {errors.termsAccepted && <p className="error">{errors.termsAccepted}</p>}
        </div>
        <button
          type="submit"
          className="btn"
          disabled={!formData.termsAccepted}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
