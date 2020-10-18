import React from 'react'

interface loginSignUpText{
    logo? : string | null; 
}

export default({logo}:loginSignUpText)=>{
    return(
        <h2 className="text-xl text-gray-900 font-bold cursor-pointer">
            {logo || "LOGO"}
        </h2>
    )
}