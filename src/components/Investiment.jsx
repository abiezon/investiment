import React from 'react';

import './Investiment.css'

const Investiment = ({investiment, handleInvestimentSell}) => {
    return ( 
        <div 
            className='investiment-container'
            style={!investiment.sale_price ? {borderLeft: "6px solid chartreuse"}: {}}
        >
            <div className='investiment-title'>
                {investiment.name}
            </div>
            <div className='bottons-container'>
                <button className='sale-button' onClick={() => handleInvestimentSell(investiment.id)}>$</button>
            </div>
        </div>
    );
}
 
export default Investiment;