import React from 'react'

interface loginSignUpText{
    loginSignUpText? : string | null; 
}

export default({loginSignUpText}:loginSignUpText)=>{
    return(
        <div className="text-base text-gray-600 cursor-pointer">
            {loginSignUpText || ""}
        </div>
    )
}