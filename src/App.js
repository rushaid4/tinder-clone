import React from "react";
import './App.css';
import Header from "./header";
import TinderCards from "./TinderCards";
import Swipebuttons from "./Swipebuttons";


function App() {
  return (
    <div className="app">


      <Header />
      <TinderCards />
     
      
      <Swipebuttons />
      
    </div>
  );
}

export default App;
