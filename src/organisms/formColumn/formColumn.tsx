import React from 'react'
interface FormColProps{
    children:any  
}
export default ({children}:FormColProps) => {
    return (
        <div className="w-1/3" >
         {children}
        </div>
    );
}
