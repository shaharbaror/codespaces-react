import React from "react";
import {Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import LogIn from "./pages/LogIn";


function App() {
  return (
    <React.Fragment>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LogIn/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
