import React from 'react';
import { useNavigate } from 'react-router-dom';
import './terms.css';

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to our platform. By accessing or using our services, you agree to the following terms and conditions. Please read them carefully.
      </p>

      <h2>1. Introduction</h2>
      <p>
        These terms and conditions govern your use of our website and services. By using our platform, you accept these terms in full. If you disagree with any part of these terms, you must not use our platform.
      </p>

      <h2>2. Intellectual Property Rights</h2>
      <p>
        Unless otherwise stated, we or our licensors own the intellectual property rights for all material on this platform. You may view, download, and print pages for your personal use, subject to the restrictions set out below.
      </p>

      <h2>3. Restrictions</h2>
      <p>You must not:</p>
      <ul>
        <li>Republish material from this website without proper attribution.</li>
        <li>Sell, rent, or sub-license material from our platform.</li>
        <li>Reproduce, duplicate, or copy material for commercial purposes.</li>
      </ul>

      <h2>4. Limitation of Liability</h2>
      <p>
        To the extent permitted by law, we will not be held responsible for any loss or damage arising from the use of our platform or services.
      </p>

      <h2>5. Changes to Terms</h2>
      <p>
        We may revise these terms and conditions at any time. By continuing to use the platform, you agree to be bound by the updated terms.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about our terms and conditions, feel free to contact us at <a href="mailto:rarespoanta10@gmail.com">support@gmail.com</a>.
      </p>

      <button onClick={() => navigate('/signup')} className="back-button">
        Go Back
      </button>
    </div>
  );
};

export default TermsAndConditions;
