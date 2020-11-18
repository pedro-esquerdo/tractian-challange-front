import React, {SelectHTMLAttributes} from 'react';

import './styles.css';


interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    label: string;
    name: string;
    options: Array<{
        _id: string;
        name: string;
    }>;
}



const Select: React.FC<SelectProps> = ({label, name, options, ...rest}) => {
    return(
        <div className="select-block">
        <label htmlFor={name}>{label}</label>
        <select value="" id={name} {...rest}>
            <option value="" disabled hidden> Selecione uma opção</option>
            {options.map(option=>{
                return <option key={option._id} value={option.name}>{option.name}</option>
            })}
        </select>
        </div>
    );
}

export default Select;