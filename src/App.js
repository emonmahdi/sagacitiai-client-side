import 'bootstrap/dist/css/bootstrap.min.css';
 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios'

import './App.css';  
import Home from './components/Home/Home'; 
import Dashboard from './Pages/auth/Dashboard/Dashboard';
import Login from './Pages/auth/Login/Login';
import Register from './Pages/auth/Register/Register';


axios.defaults.baseURL = 'https://base.sagacitiai.com/base/public';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

function App() { 

  return (
    <div className="App"> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
