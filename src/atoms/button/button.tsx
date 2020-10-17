import React from 'react'
interface ButtonProps {
    buttonText?: string | null;
}
export default ({ buttonText }: ButtonProps) => {
    return (
        <button className="cursor-pointer rounded outline-none button-color-orange text-white py-4 px-24 font-sans  font-semibold" >{buttonText}</button>
    );
}
