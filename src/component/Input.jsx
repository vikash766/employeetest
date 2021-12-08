import React from 'react';
const Input = ({value, placeholder, onChange}) => {
    return(
        <input value={value} placeholder={placeholder} onChange={onChange} />
    )
}

export default Input;