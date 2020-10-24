import React, { InputHTMLAttributes } from "react";
import "./styles.css";

/* To allow the Input component to receive all props an input tag usually 
   receives the interface must extend the React interface InputHTMLAttributes 
   and it must contain the global generic param HTMLInputElement*/
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

//* every property that is not mentioned will be stored in the rest object
const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <>
      <div className='input-block'>
        <label htmlFor={name}>{label}</label>
        <input type='text' id={name} {...rest} />
      </div>
    </>
  );
};

export default Input;
