import React from "react";
import Clock from "./components/clock/Clock";
import Header from "./components/Header/Header";
import WeekChart from "./components/HourChart/WeekChart";


function App() {
  return (
    <React.Fragment>
      <Header />
      <Clock/>
      <WeekChart/>
    </React.Fragment>
  );
}

export default App;
