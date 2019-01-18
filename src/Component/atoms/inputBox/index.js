import React from 'react'

const InputBox = (props) => {
    const { className, value , id, onChange, onKeyDown, name, placeholder} = props;
    return (
        <React.Fragment>
        <input className={className} value={value} id={id} onChange={onChange} onKeyDown={onKeyDown} name={name} placeholder={placeholder}/>
        </React.Fragment>
    )
}

export default InputBox;