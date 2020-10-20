import React from 'react'
import TableData from '../../atoms/tableData/tableData'

interface TableRecord {
    ID?: any;
    Name?: string;
    Hazard?: any;
    favouriteHandler?: any
    isFavourite: boolean,
}
export default ({ID, Name, favouriteHandler, isFavourite}: TableRecord) => {
    return (
        <div>
            {/* table heading section */}
            <div className="py-1 flex justify-center">    
                <ul className="flex bg-white rounded shadow-sm border-gray-400 border py-3 cursor-pointer hover:bg-gray-300 w-6/12">
                    {ID && <li className="w-4/12 px-3"><TableData tableData={ID}/></li>}
                    {Name && <li className="w-4/12 px-1"><TableData tableData={Name}/></li>}
                    <li className="w-4/12 px-1 flex justify-center cursor-pointer" onClick={() => favouriteHandler(ID, Name)}>
                        {isFavourite ? <span className="bg_heart_black_image"/> : <span className="bg_heart_image"/>}
                    </li>
                </ul>
            </div>
        </div>
    )
}