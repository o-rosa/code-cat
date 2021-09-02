import React from 'react';
import '../stylesheet/component/DonateOptions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard as cartao, faMoneyCheckAlt as boleto, faArrowRight as arrow} from '@fortawesome/free-solid-svg-icons';
import foto from "../images/pix.png";

function Options() {


    return (   

        <div className="opcoes">
            <div className="caixa">
                <img src={foto} className="icon-option"/>
                <h1 className="text">PIX</h1>
                <FontAwesomeIcon icon={arrow} className="icon-arrow"/>
            </div>
            <div className="caixa">
                <FontAwesomeIcon icon={cartao} className="icon-option"/>
                <h1 className="text txt-credito">Cartão de Credito</h1>
                <FontAwesomeIcon icon={arrow} className="icon-arrow"/>
            </div>
            <div className="caixa">
                <FontAwesomeIcon icon={boleto} className="icon-option"/>
                <h1 className="text">Boleto</h1>
                <FontAwesomeIcon icon={arrow} className="icon-arrow"/>
            </div>
        </div>

    );


  }

  export default Options; 
