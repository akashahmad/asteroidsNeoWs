import React from 'react'

interface InputProps {
    placeholder: string;
    type: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    onChange: (value: string | number) => void;
    value?:any;
}
export default ({ placeholder, type, onChange, required, minLength, maxLength, value }: InputProps) => {
    return (
        <div>
            {value?<input className="w-full font-sans  font-semibold not-italic  text-current border rounded p-3 outline-none"
                type={type} placeholder={placeholder} onChange={(event) => onChange(event.target.value)}
                   required={required||false} minLength={minLength||2} maxLength={maxLength||200} value={value}
            />:<input className="w-full font-sans  font-semibold not-italic  text-current border rounded p-3 outline-none"
                type={type} placeholder={placeholder} onChange={(event) => onChange(event.target.value)}
                   required={required||false} minLength={minLength||2} maxLength={maxLength||200}
            />}
        </div>
    );
}
