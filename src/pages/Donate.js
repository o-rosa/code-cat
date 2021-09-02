import React, { useState } from 'react';
import '../stylesheet/pages/Donete.css';
import CardsDonate  from "../component/DonateCards";
import Options  from "../component/DonateOptions";


function Donate() {


    return (   
    
        <div className="container">
            <div className="donate">
                <h2 className="titulo">Donate</h2>
                <CardsDonate />
                <Options />
            </div>
        </div>
    );

   
    
  }

  export default Donate; 













  /*
  
  
  
  
  
  
  
  */
  
  