import React from 'react'
import TableData from '../../atoms/tableData/tableData'

interface TableRecord {
    ID?: any;
    Name?: string;
    Date?: string;
    Time?: string;
    Ab_Magnitutde?: string;
    Min_Max_Est_Diamater?: string;
    Relative_Velocity?: string;
    Hazard?: any;
    favouriteHandler?: any
    isFavourite: boolean,
}
export default ({ID, Name, Date, Time, Ab_Magnitutde, Min_Max_Est_Diamater, Hazard, Relative_Velocity, favouriteHandler, isFavourite}: TableRecord) => {
    return (
        <div>
            {/* table heading section */}
            <div className="py-1">    
                <ul className="flex bg-white rounded shadow-sm border-gray-400 border py-3 cursor-pointer hover:bg-gray-300">
                    {ID && <li className="w-1/12 px-3"><TableData tableData={ID}/></li>}
                    {Name && <li className="w-1/12 px-1"><TableData tableData={Name}/></li>}
                    {Date && <li className="w-1/12 px-1"><TableData tableData={Date}/></li>}
                    {Time && <li className="w-1/12 px-1"><TableData tableData={Time}/></li>}
                    {Ab_Magnitutde && <li className="w-2/12 px-1"><TableData tableData={Ab_Magnitutde}/></li>}
                    {Min_Max_Est_Diamater &&
                    <li className="w-2/12 px-2"><TableData tableData={Min_Max_Est_Diamater}/></li>}
                    {Relative_Velocity && <li className="w-2/12 px-3"><TableData tableData={Relative_Velocity}/></li>}
                    {Hazard && <li className="w-1/12 px-1 flex justify-center">{Hazard === "true" ? <span className="bg_tick_image"/> : <span className="bg_Cross_image"/>}</li>}
                    <li className="w-2/12 px-1 flex justify-center cursor-pointer" onClick={() => favouriteHandler(ID, Name)}>
                        {isFavourite ? <span className="bg_heart_black_image"/> : <span className="bg_heart_image"/>}
                    </li>
                </ul>
            </div>
        </div>
    )
}