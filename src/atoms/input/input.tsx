import React from 'react'

interface InputProps {
    placeholder: string;
    type: string;
    onChange: (value: string | number) => void;
}
export default ({ placeholder, type, onChange }: InputProps) => {
    return (
        <div  >
            <input className="w-full font-sans  font-semibold not-italic  text-current border rounded p-3 outline-none"
                type={type} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
        </div>
    );
}
