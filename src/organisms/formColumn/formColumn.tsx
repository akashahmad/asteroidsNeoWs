import React from 'react'
interface FormColProps{
    children:any  
}
export default ({children}:FormColProps) => {
    return (
        <div className="w-1/3 mx-4" >
         {children}
        </div>
    );
}
