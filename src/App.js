import './stylesheet/App.css';
import NavBar  from './component/NavBar';
import React, { useEffect } from "react";

import Routes from './Routes';


function App() {




  return (
      <div className="App" id="App">
            <NavBar />
            <Routes />

      </div>
  );
}

export default App;
