import React from 'react'
import Label from '../../atoms/label/label'
import Input from '../../atoms/input/input'
interface FormInputProps {
    label: string ;
    placeholder: string ;
    type: string ;
    onChange:any ;
}
export default ({ placeholder,type ,onChange,label}: FormInputProps) => {
    return (
        <div className="" >
          <Label label={label} />
          <Input placeholder={placeholder} type={type} onChange={onChange} />
        </div>
    );
}
