import React from 'react'
import TableHeadings from '../../atoms/tableHeading/tableHeading'
interface TableHeadings {
    ID?: boolean;
    Name?: boolean;
    Remove_Favourite?: boolean;
}
export default ({ID, Name, Remove_Favourite}: TableHeadings) => {
    return (
        <div>
            {/* table heading section */}
            <div className="flex justify-center">
                <ul className="flex w-6/12">
                    {ID && <li className="w-4/12 px-3"><TableHeadings tableHeading={"ID"}/></li>}
                    {Name && <li className="w-4/12 px-1"><TableHeadings tableHeading={"Name"}/></li>}
                    {Remove_Favourite &&
                    <li className="w-4/12 px-1 text-center"><TableHeadings tableHeading={"Remove from Favourite"}/></li>}
                </ul>
            </div>
        </div>
    )
}