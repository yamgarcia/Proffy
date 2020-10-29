import React, { TextareaHTMLAttributes } from "react";
import "./styles.css";

/* To allow the Textarea component to receive all props an Textarea tag usually 
   receives the interface must extend the React interface TextareaHTMLAttributes 
   and it must contain the global generic param HTMLTextareaElement*/
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

//* every property that is not mentioned will be stored in the rest object
const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
  return (
    <>
      <div className='textarea-block'>
        <label htmlFor={name}>{label}</label>
        <textarea id={name} {...rest} />
      </div>
    </>
  );
};

export default Textarea;
