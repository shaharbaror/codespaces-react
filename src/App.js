import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Create_organization from './components/Create-organization/Create_organization';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>

          <Route path="login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="new-organization" element={<Create_organization/>}/>
          {/* new-organization */}

        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
