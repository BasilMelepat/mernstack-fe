import React from 'react';
import './SignupBox.css';
import CustomButton from './Common/CustomButton.jsx';
import CustomInput from './Common/CustomInput.jsx';
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function SignupBox() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {name, email, password})
    .then(result => {console.log(result)
      navigate('/login')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="signup-box container mt-5">
      <h2 className="text-center">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <CustomInput 
          name={"userName"} 
          label={"Username"} 
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <CustomInput 
          name={"email"} 
          label={"Email"} 
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomInput 
          name={"password"} 
          label={"Password"} 
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton 
          label={"Sign Up"}
          type={"submit"}
        />
      </form>
      <p>Already Have an Account? <Link to="/login">Log in</Link></p>
    </div>
  );
};

export default SignupBox;