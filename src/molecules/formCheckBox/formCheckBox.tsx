import React from 'react'
import Label from '../../atoms/label/label'
import CheckBox from '../../atoms/checkBox/checkBox'
interface FormCheckProps {
    label: string;
    type: string;
    onChange: any;
}
export default ({ type, onChange, label }: FormCheckProps) => {
    return (
        <div className="flex" >
            <CheckBox type={type} onChange={onChange} />
            <Label label={label} />
        </div>
    );
}
