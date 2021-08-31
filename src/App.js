import './stylesheet/App.css';
import NavBar  from './component/NavBar';
import React, { useEffect } from "react";

import Routes from './Routes';


function App() {

  useEffect(() => {
    var alturaDiv = document.getElementById('App').offsetHeight;
    var alturaPagina = window.screen.height;
    if(alturaDiv > alturaPagina){
      document.getElementById('App').style.height = "100%";
    }else{
      document.getElementById('App').style.height = "100vh";
    } 
  }, []);


  return (
      <div className="App" id="App">
            <NavBar />
            <Routes />

      </div>
  );
}

export default App;
