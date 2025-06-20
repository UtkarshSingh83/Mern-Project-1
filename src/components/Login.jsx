import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Login = ({ updateUserDetails }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const validate = () => {
    let isValid = true;
    let newErrors = {};
    if (formData.username.length === 0) {
      isValid = false;
      newErrors.username = "Username is mandatory";
    }
    if (formData.password.length === 0) {
      isValid = false;
      newErrors.password = "Password is mandatory";
    }
    setErrors(newErrors);
    return isValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      //Data to be sent to the server
      const body = {
        username: formData.username,
        password: formData.password
      }
      const config = {
        //tells axios to include cookie in the request + some auth headers
        withCredentials: true
      };
      try {
        const response = await axios.post('http://localhost:5001/auth/login', body, config);

        updateUserDetails(response.data.user);
      } catch (error) {
        console.log(error);
        setErrors({ message: "Something went wrong. Please try again." });
      }
    }
  };
  return (
    <div className="container text-center">
      {message && (message)}
      {errors.message && (errors.message)}
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && (errors.username)}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && (errors.password)}
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
