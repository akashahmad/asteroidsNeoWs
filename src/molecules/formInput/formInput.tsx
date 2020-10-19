import React from 'react'
import Label from '../../atoms/label/label'
import Input from '../../atoms/input/input'
interface FormInputProps {
    label: string;
    placeholder: string;
    required?: boolean;
    type: string;
    onChange: any;
    minLength?: number;
    maxLength?: number
}
export default ({placeholder, type, onChange, label, required, minLength, maxLength}: FormInputProps) => {
    return (
        <div>
            <Label label={label}/>
            <Input placeholder={placeholder} type={type} onChange={(event) => onChange(event)}
                   required={required || false} minLength={minLength||2} maxLength={maxLength||200}/>
        </div>
    );
}
