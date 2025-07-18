import React, { useState } from 'react';
import  './App.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [submit, setSubmitted] = useState(false);
  const [text,setText]=useState("Shraddha")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.username.trim()){
        newErrors.username = 'Username is required';}
    if (!formData.email.trim()) {
        newErrors.email = 'Email is required';}
    if (!formData.password) {
        newErrors.password = 'Password is required';}
    if (formData.password !== formData.confirmPassword){
        newErrors.confirmPassword = 'Passwords do not match';}
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      console.log('Submitted:', formData);
    } else {
      setSubmitted(false);
    }
  };
  const newPage=()=>{
    setText("Registration Successful !!")
    document.querySelector("#form-container").style.display='none';
  }

  

return (
  <>
    {submit ? (
      <h2 style={{ textAlign: 'center', marginTop: '50px' }}>
        ✅ Registration Successful!
      </h2>
    ) : (
      <div className="form-container" id="form-container">
        <h2>Register Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <small>{errors.username}</small>}
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small>{errors.email}</small>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <small>{errors.password}</small>}
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
          </div>

          <button type="submit" id="register-btn">Register</button>
        </form>
      </div>
    )}
  </>
);

}

export default RegistrationForm