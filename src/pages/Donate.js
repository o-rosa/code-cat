import React from 'react';
import '../stylesheet/Donete.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat , } from '@fortawesome/free-solid-svg-icons'


function Donate() {
    return (   

        <div className="card" >
            <div className="card-body">
                <h2 className="card-title">R$ 100</h2>
                <FontAwesomeIcon icon={faCat} className="icon gato-invert"/>
                <p className="card-text">Nivel Sheik Arabe</p>
            </div>
        </div>

    );
  }

  export default Donate; 













  /*
  
  
  
  
  
  
  
  */
  
  