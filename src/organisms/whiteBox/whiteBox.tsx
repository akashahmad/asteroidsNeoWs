import React from 'react'
interface FormBoxProps{
    children:React.ReactNode;
}

export default ({children}:FormBoxProps) => {
    return (
        <div className=" shadow lg:mx-48 xl:mx-48 md:mx-48 bg-white" >
         {children}
        </div>
    );
}
