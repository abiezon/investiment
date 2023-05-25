import React from 'react';

import './Button.css';

// const props = [
//     {
//         label: string
//     }
// ]

const Button = ({label, onClick}) => {
    return ( 
        <button onClick={onClick} className='add-button'>{label}</button>
     );
}
 
export default Button;