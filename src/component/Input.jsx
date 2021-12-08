import React from 'react';
const Input = ({value, placeholder, onChange, id}) => {
    return(
        <input id={id} value={value} placeholder={placeholder} onChange={onChange} />
    )
}

export default Input;