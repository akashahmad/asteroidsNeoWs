import React from 'react'

interface CheckBoxProps {
    type: string;
    onChange: any;
}
export default ({ type, onChange }: CheckBoxProps) => {
    return (
        <div className="pr-2" >
            <input className="  rounded p-3 outline-none border-color-orange"  type={type}  onChange={onChange} />
        </div>
    );
}
