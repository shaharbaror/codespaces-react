import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import Login from './components/login/Login';
import Home from './components/home/Home';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>

          <Route path="login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>

        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
