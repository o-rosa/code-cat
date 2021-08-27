import React, { useState } from 'react';
import '../stylesheet/NavBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat, faHome, faPager, faBook, faFolder, faPhoneAlt, faDonate } from '@fortawesome/free-solid-svg-icons'
import { Collapse} from 'reactstrap';

import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (   
    //<Navbar className="menu" expand="lg"></Navbar>

    <nav className="menu navbar navbar-expand-lg navbar-dark" expand="lg">
      <a href="/code-cat" className="navbar-brand"> <div className='logo'><FontAwesomeIcon icon={faCat} className="gato gato-invert"/>  CodeCat  <FontAwesomeIcon icon={faCat} className="gato"/></div> </a>
      <button aria-label="Toggle navigation"onClick={toggle} type="button" class="ml-auto navbar-toggler">
        <span class="navbar-toggler-icon"></span>
      </button>
      <Collapse isOpen={isOpen} navbar>
        <ul className="navbar-nav">
            <li className="nav-item" onClick={toggle}>
              <Link to="/" className="nav-link">
                <div className="texto-menu"><FontAwesomeIcon icon={faHome}/> Home</div>
              </Link>
            </li >
            <li className="nav-item" onClick={toggle}>
              <Link to="/about" className="nav-link">
                <div className="texto-menu"><FontAwesomeIcon icon={faPager}/> About</div>
              </Link>
            </li>
            <li className="nav-item" onClick={toggle}>
              <Link to="/posts" className="nav-link">
                <div className="texto-menu"><FontAwesomeIcon icon={faBook}/> Posts</div>
              </Link>
            </li>
            <li className="nav-item" onClick={toggle}>
              <Link to="/projects" className="nav-link">
                <div className="texto-menu"><FontAwesomeIcon icon={faFolder}/> Projects</div>
              </Link>
            </li>
            <li className="nav-item" onClick={toggle}>
              <Link to="/contact" className="nav-link">
                <div className="texto-menu"> <FontAwesomeIcon icon={faPhoneAlt}/> Contact</div>
              </Link>
            </li>
            <li className="nav-item" onClick={toggle}>
              <Link to="#" className="nav-link">
                <div className="texto-menu apoie"><FontAwesomeIcon icon={faDonate} className="doneteIcon"/><span className="spanNone">&nbsp;&nbsp; Donate to this project :)</span ><span className="spanHover">&nbsp;&nbsp; Donate to this project :D</span></div>
              </Link>
            </li>
          </ul>
        </Collapse>
    </nav>

  );
}

export default NavBar;

