import React from 'react'

interface TableHeading{
    tableData:string;
}
export default({tableData}:TableHeading)=>{
    return(
        <div className="text-gray-800 text-sm">
            {tableData}
        </div>
    )
}