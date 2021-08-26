import './stylesheet/App.css';
import NavBar  from './component/NavBar';

import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
      <div className="App">
            <NavBar />
            <Routes />
      </div>
  );
}

export default App;
