import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProductAll from './page/ProductAll'
import Login from './page/Login'
//import ProductDetail from './page/ProductDetail'
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './route/PrivateRoute'

function App() {
  const [authenticate, setAuthenticate] = useState(false) // true: login success
  useEffect(() => {
    //console.log("aaa", authenticate);
  }, [authenticate])

  return ( 
    <div >
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/product/:id" element={<PrivateRoute/>}/>
      </Routes>
    </div>
  );
}

export default App;
