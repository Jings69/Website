import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css'; // Import the CSS file

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered with:", { name, email, password });
    alert('Registration successful! You can now log in.');
    navigate('/login'); // Redirect to login page after registration
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="registration-input"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="registration-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="registration-input"
          required
        />
        <button type="submit" className="registration-button">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <span onClick={() => navigate('/login')} className="registration-link">
          Login here
        </span>
      </p>
    </div>
  );
}

export default Registration;
