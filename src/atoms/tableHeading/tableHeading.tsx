import React from 'react'

interface TableHeading{
    tableHeading:string;
}
export default({tableHeading}:TableHeading)=>{
    return(
        <div className="text-gray-600 text-sm font-semibold">
            {tableHeading}
        </div>
    )
}