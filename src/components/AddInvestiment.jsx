import React, { useState } from 'react';

import Button from './Button';

import './AddInvestiment.css';

const AddInvestiment = ({handleInvestimentAddition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddClick = () => {
        handleInvestimentAddition(inputData)
        setInputData('')
    }

    return (
        <div className='add-investiment-container'>
            <input 
                onChange={handleInputChange}
                value={inputData}
                className='add-investiment-input' 
                type="text" 
            />
            <div className='add-button-container'>
                <Button onClick={handleAddClick} label = {'Adicionar'}></Button>
            </div>
        </div>
    );
}
 
export default AddInvestiment;