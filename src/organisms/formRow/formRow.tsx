import React from 'react'
interface FormRowProps{
    children:any  
}

export default ({children}:FormRowProps) => {
    return (
        <div className="flex items-center justify-center my-6" >
         {children}
        </div>
    );
}
