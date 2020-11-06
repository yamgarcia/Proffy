import React, { SelectHTMLAttributes } from "react";
import "./styles.css";

/* To allow the Select component to receive all props an Select tag usually 
   receives the interface must extend the React interface SelectHTMLAttributes 
   and it must contain the global generic param HTMLSelectElement*/
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

//* every property that is not mentioned will be stored in the rest object
const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
  return (
    <>
      <div className='select-block'>
        <label htmlFor={name}>{label}</label>
        <select id={name} {...rest}>
          <option value='' disabled hidden selected>
            Select a Subject
          </option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Select;
