import {Routes, Route} from 'react-router-dom';
import { ModeContext, UserContext } from "./components/stete";
import { useContext, useEffect, useState} from 'react';
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/products';
import Product from './pages/product';
import Leyout from './components/leyout';
import Login from './components/login';
import Protect from './pages/Protect';
import Edit from './pages/edit';
import './App.css';

function App() {
  const {auth, setAuth} = useContext(UserContext); 
  const { mode, setMode } = useContext(ModeContext);
  console.log(auth);
  
  return (
    <div className={mode ? "dark" : 'ligth' }>
      <Leyout>
        <div>
          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/about' element={ <About/> }/>
            <Route path='/:categ' element={ <Products/>} />
            <Route path='/categ/:id' element={ <Product/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/protect' element= {<Protect/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </Leyout> 
    </div>
  );
}

export default App;
