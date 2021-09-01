import React from 'react';
import '../stylesheet/Donete.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessPawn as c1, faChessKnight as c2, faChessKing as c3} from '@fortawesome/free-solid-svg-icons'
import { Link, animateScroll as scroll } from "react-scroll";


function Donate() {

    return (   
    
        <div className="container">
            <div className="donate">
                <h2 className="titulo">Donate</h2>
                <div className="cards" >
                    <div className="card-body">
                        <h2 className="card-title">R$ 05</h2>
                        <FontAwesomeIcon icon={c1} className="icon gato-invert"/>
                        <p className="card-text">Nivel Pobre Peão</p>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">R$ 20</h2>
                        <FontAwesomeIcon icon={c2} className="icon gato-invert"/>
                        <p className="card-text">Nivel Cavaleiro Horoso</p>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">R$ 50</h2>
                        <FontAwesomeIcon icon={c3} className="icon gato-invert"/>
                        <p className="card-text">Nivel Rei dos Arabes</p>
                    </div>

                </div>
            </div>
        </div>
    );


    

    
    
  }

  export default Donate; 













  /*
  
  
  
  
  
  
  
  */
  
  