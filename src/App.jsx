import React, { useState } from 'react';

import Investiments from './components/Investiments';
import AddInvestiment from './components/AddInvestiment';
import {v4 as uuidv4} from 'uuid';

import './App.css';

const App = () => {

  const [listInvestiments, setInvestiments] = useState([
    {
      id: 1,
      alias: 'TAEE3F',
      name: 'TAESA ON',
      type: 'ação',
      broker: 'C6',
      bank: 'C6',
      cost_price: '11.67',
      qtty: 6,
      sale_price: '',
      current_price: '12.00'
    },
    {
      id: 2,
      alias: 'CPFL3F',
      name: 'COPEL ON',
      type: 'ação',
      broker: 'C6',
      bank: 'C6',
      cost_price: '6,23',
      qtty: 2,
      sale_price: '',
      current_price: '6.76'
    }

  ])

  const handleInvestimentAddition = (alias) => {
      const newInvestiment = [... listInvestiments, {
        id: uuidv4(),
        alias: alias,
        name: alias+' Teste',
        type: 'ação',
        broker: 'C6',
        bank: 'C6',
        cost_price: '0.01',
        qtty: 1,
        sale_price: '',
        current_price: '0.01',
      }]

      setInvestiments(newInvestiment)
  }

  const handleInvestimentSell = (investimentId) => {
    const sellInvestiment = listInvestiments.map((investiment) => {
      if (investiment.id === investimentId) return { ... investiment, sale_price: '0.02'}

      return investiment
    })

    setInvestiments(sellInvestiment)
  }

  return (
    <>
      <div className='container'>
        <AddInvestiment handleInvestimentAddition={handleInvestimentAddition}/>
        <Investiments listInvestiments={listInvestiments} handleInvestimentSell={handleInvestimentSell}/>
      </div>
    </>    
  );
}

export default App;
