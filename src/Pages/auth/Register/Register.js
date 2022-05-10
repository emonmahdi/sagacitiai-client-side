import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import NavMenu from "../../../components/Home/NavMenu/NavMenu";

const Register = () => { 
    const navigate = useNavigate();
    const [registerInput, setRegisterInput] = useState({
        name: '',
        email: '',
        password: '',
        error_list: []
    });

  

  const handleChange = (e) => { 
    setRegisterInput({...registerInput, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const data = {
        name: registerInput.name,
        email: registerInput.email,
        password: registerInput.password,
    }
 
        axios.post(`https://base.sagacitiai.com/base/public/api/register`, data).then(res => {
            if(res.data.status === 200)
            {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
                Swal.fire('Success', res.data.message,'success')
                navigate('/')
            }
            else{
                setRegisterInput({ ...registerInput, error_list: res.data.validation_errors})
            }

        });
     

  };

  return (
    <>
      <NavMenu />
      <div className="mx-auto p-4 w-50 border mt-4">
        <form onSubmit={handleSubmit}>
          <h2>Register Form</h2>
          <div className="text-start my-3">
            <label>Name: </label>
            <input
              type="text"
              onChange={handleChange}
              className="form-control"
              name="name"
              value={registerInput.name}
              id=""
              required
            />
            <span>{registerInput.error_list.name}</span>
          </div>
          <div className="text-start my-3">
            <label>Email: </label>
            <input
              type="email"
              onChange={handleChange}
              className="form-control"
              name="email"
              id=""
              value={registerInput.email}
              required
            />
            <span>{registerInput.error_list.email}</span>
          </div>
          <div className="text-start my-3">
            <label>Password: </label>
            <input
              type="password"
              onChange={handleChange}
              className="form-control"
              name="password"
              id=""
              value={registerInput.password}
              required
            />
            <span>{registerInput.error_list.password}</span>
          </div>
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    </>
  );
};

export default Register;
