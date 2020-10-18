import React from 'react'
import TableHeadings from '../../atoms/tableHeading/tableHeading'

export default () => {
    return (
        <div>
            {/* table heading section */}
            <div>
                <ul className="flex">
                    <li className="w-1/12 px-3"><TableHeadings tableHeading={"ID"} /></li>  
                    <li className="w-1/12 px-1"><TableHeadings tableHeading={"Name"} /></li>
                    <li className="w-1/12 px-1"><TableHeadings tableHeading={"Date"} /></li>
                    <li className="w-1/12 px-1"><TableHeadings tableHeading={"Time"} /></li>
                    <li className="w-2/12 px-1"><TableHeadings tableHeading={"Ab_Magnitutde"} /></li>
                    <li className="w-2/12 px-1"><TableHeadings tableHeading={"Min_Max_Est_Diamater"} /></li>
                    <li className="w-2/12 px-1"><TableHeadings tableHeading={"Relative_Velocity"} /></li>
                    <li className="w-1/12 px-1"><TableHeadings tableHeading={"Hazard"} /></li>
                    <li className="w-1/12 px-1"><TableHeadings tableHeading={"Add_Favourite"} /></li>
                </ul>
            </div>
        </div>
    )
}