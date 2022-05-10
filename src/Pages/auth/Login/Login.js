import React from 'react';
import NavMenu from '../../../components/Home/NavMenu/NavMenu';

const Login = () => {
    return (
        <>
        <NavMenu />
        <div className="mx-auto p-4 w-50 border mt-4">
         <form>
             <h2>Login Form</h2> 
             <div className="text-start my-3">
                <label>Email: </label>
                <input type="email" className="form-control" name="" id="" />
             </div>
             <div className="text-start my-3">
                <label>Password: </label>
                <input type="password" className="form-control" name="" id="" />
             </div>
             <input type="submit" className="btn btn-primary" />
             
         </form>
      </div>
        </>
    );
};

export default Login;