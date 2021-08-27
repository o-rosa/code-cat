import './stylesheet/App.css';
import NavBar  from './component/NavBar';

import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import Donete from './component/Donate';


function App() {
  return (
      <div className="App">
            <NavBar />
            
            <Routes />
            <Donete />
      </div>
  );
}

export default App;
