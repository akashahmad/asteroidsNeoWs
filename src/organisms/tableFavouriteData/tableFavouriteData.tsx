import React from 'react'
import TableData from '../../atoms/tableData/tableData'

interface TableRecord {
    ID?: any;
    Name?: string;
    Hazard?: any;
    favouriteHandler?: any
    isFavourite: boolean,
    getAsteroidRecord: any
}
export default ({ID, Name, favouriteHandler, isFavourite, getAsteroidRecord}: TableRecord) => {
    return (
        <div>
            {/* table heading section */}
            <div className="py-1 flex justify-center">    
                <ul className="flex bg-white rounded shadow-sm border-gray-400 border py-3 cursor-pointer hover:bg-gray-300 w-6/12" onClick={()=>getAsteroidRecord(ID)}>
                    {ID && <li className="w-4/12 px-3"><TableData tableData={ID}/></li>}
                    {Name && <li className="w-4/12 px-1"><TableData tableData={Name}/></li>}
                    <li className="w-4/12 px-1 flex justify-center cursor-pointer relative z-0">
                        {isFavourite ? <span className="bg_heart_black_image"  onClick={() => favouriteHandler(ID, Name)}/> : <span className="bg_heart_image"  onClick={() => favouriteHandler(ID, Name)}/>}
                    </li>
                </ul>
            </div>
        </div>
    )
}