import React from 'react'
import TableHeadings from '../../atoms/tableHeading/tableHeading'
interface TableHeadings {
    ID?: boolean;
    Name?: boolean;
    Date?: boolean;
    Time?: boolean;
    Ab_Magnitutde?: boolean;
    Min_Max_Est_Diameter?: boolean;
    Relative_Velocity?: boolean;
    Hazard?: boolean;
    Add_Favourite?: boolean;
    Remove_Favourite?: boolean;
    setDiameterUnit?: any;
    setVelocityUnit?: any;
}
export default ({ID, Name, Date, Time, Ab_Magnitutde, Min_Max_Est_Diameter, Relative_Velocity, Hazard, Add_Favourite, Remove_Favourite, setVelocityUnit, setDiameterUnit}: TableHeadings) => {
    return (
        <div>
            {/* table heading section */}
            <div>
                <ul className="flex ">
                    {ID && <li className="w-1/12 px-3"><TableHeadings tableHeading={"ID"}/></li>}
                    {Name && <li className="w-1/12 px-1"><TableHeadings tableHeading={"Name"}/></li>}
                    {Date && <li className="w-1/12 px-1"><TableHeadings tableHeading={"Date"}/></li>}
                    {Time && <li className="w-1/12 px-1"><TableHeadings tableHeading={"Time"}/></li>}
                    {Ab_Magnitutde && <li className="w-2/12 px-1"><TableHeadings tableHeading={"Ab Magnitutde"}/></li>}
                    {Min_Max_Est_Diameter &&
                    <li className="flex w-2/12 px-2"><TableHeadings tableHeading={"Min - Max Est Diameter"}/>
                        <select className="h-30 w-90 rounded border border-gray-400" onChange={(event)=>setDiameterUnit(event.target.value)}>
                            <option value="km">Kilo Meters</option>
                            <option value="meters">Meters</option>
                            <option value="miles">Miles</option>
                            <option value="feet">Feet</option>
                        </select>
                    </li>}
                    {Relative_Velocity &&
                    <li className="flex w-2/12 px-3">
                        <TableHeadings tableHeading={"Relative Velocity"}/>
                        <select className="h-30 w-90 rounded border border-gray-400" onChange={(event)=>setVelocityUnit(event.target.value)}>
                            <option value="kmSec">KM/sec</option>
                            <option value="kmH">KM/hour</option>
                            <option value="mH">Miles/hour</option>
                        </select>
                    </li>}
                    {Hazard && <li className="w-1/12 px-1 text-center"><TableHeadings tableHeading={"Hazard"}/></li>}
                    {Add_Favourite &&
                    <li className="w-2/12 px-1 text-center"><TableHeadings tableHeading={"Add to Favourite"}/></li>}
                    {Remove_Favourite &&
                    <li className="w-2/12 px-1 text-center"><TableHeadings tableHeading={"Remove from Favourite"}/></li>}
                </ul>
            </div>
        </div>
    )
}