import React from 'react';
import { CgDollar, CgNotes } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

import './Investiment.css'

const Investiment = ({investiment, handleInvestimentSell}) => {
    const navigate = useNavigate();

    const handleInvestimentDetailClick = () => {
        navigate(`/${investiment.alias}`)
    }

    return ( 
        <div 
            className='investiment-container'
            style={!investiment.sale_price ? {borderLeft: "6px solid chartreuse"}: {}}
            key={investiment.id}
        >
            <div className='investiment-title'>
                {investiment.name}
            </div>
            <div className='buttons-container'>
                <button 
                    className='info-button' 
                    onClick={() => handleInvestimentDetailClick( investiment.alias)} >
                    <CgNotes/>
                </button>
                <button className='sale-button' onClick={() => handleInvestimentSell(investiment.id)}>
                    <CgDollar />
                </button>
            </div>
        </div>
    );
}
 
export default Investiment;