import React, { useState } from 'react';
import '../stylesheet/component/DonateCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessPawn as c1, faChessKnight as c2, faChessKing as c3} from '@fortawesome/free-solid-svg-icons'


function CardsDonate() {

    const [cardselect05, setCardselect05] = useState(false);
    const [cardselect20, setCardselect20] = useState(false);
    const [cardselect50, setCardselect50] = useState(false);


    return (   

        <div className="cards" >
            <div className={cardselect05? 'card-body card-select': 'card-body' } onClick={()=>{setCardselect05(!cardselect05); setCardselect20(false); setCardselect50(false)}}>
                <h2 className="card-title">R$ 05</h2>
                <FontAwesomeIcon icon={c1} className="icon"/>
                <p className="card-text">Nivel Pobre Peão</p>
            </div>
            <div className={cardselect20? 'card-body card-select': 'card-body' } onClick={()=>{setCardselect05(false); setCardselect20(!cardselect20); setCardselect50(false)}}>
                <h2 className="card-title">R$ 20</h2>
                <FontAwesomeIcon icon={c2} className="icon"/>
                <p className="card-text">Nivel Cavaleiro Honroso</p>
            </div>
            <div className={cardselect50? 'card-body card-select': 'card-body' } onClick={()=>{setCardselect05(false); setCardselect20(false); setCardselect50(!cardselect50)}}>
                <h2 className="card-title">R$ 50</h2>
                <FontAwesomeIcon icon={c3} className="icon"/>
                <p className="card-text">Nivel Rei dos Arabes</p>
            </div>
        </div>

    );


  }

  export default CardsDonate; 
