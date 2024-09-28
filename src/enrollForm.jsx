import React, { useState } from 'react';
import './enrollstudent.css'; // Importing the CSS file
import { useNavigate } from 'react-router-dom';

const EnrollStudent = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show popup on successful registration
    alert('Thank you for your interest, we will get back to you');
    
    // Reset form fields
    setFormData({
      name: '',
      number: '',
      email: '',
    });
  };
  const handleBack = () => {
    navigate('/'); // Redirect to the home page
  };
  return (
    <div className="register-container">

      <h3 style={{marginBottom:"17px"}}>Enroll Student</h3>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          {/* <label htmlFor="name">Name</label> */}
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="password">Enter Mo</label> */}
          <input
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
            placeholder="Enter Mobile Number"
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

     

        <button type="submit" className="register-button">Enroll</button>
      </form>
      <button onClick={handleBack} className="back-button">Back to Home</button>
    </div>
  );
};

export default EnrollStudent;
