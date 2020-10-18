import React from 'react'
import FilterRow from '../../organisms/filterRow/filterRow'
import Header from '../../organisms/header/header'
import TableHeader from '../../organisms/tableHeadings/tableHeadings'
import TableData from '../../organisms/tableData/tableData'
import ListHeading from '../../atoms/listHeading/listHeading'

export default () => {
    return (
        <div>
            <div>
                <Header logo={"LOGO"} firstText={"Hello! John Doe"} betweenText={"|"} lastText={"Logout"} />
            </div>
            <div className="px-8 ">
                {/* Nearest Asteroids */}
                <div className="py-4">
                    <div>
                        <FilterRow placeholder={"Search By Id"} type={"number"} mainHeading={"Nearest Asteroids"} />
                    </div>
                    <div className="py-5">
                        <TableHeader />
                        <TableData ID={"0001"} Name={"215 RC"} Date={"06/25/2020"} Time={"09:45"} Ab_Magnitutde={"24.3"}
                            Min_Max_Est_Diamater={"0.0366906138 - 0.0820427065"} Relative_Velocity={"19.4850295284"} Hazard={"False"} />
                    </div>
                </div>
                {/* Favourite asternoids */}
                <div className="py-4">
                    <div>
                        <ListHeading mainHeading={"Favourite Asteroids"} />
                    </div>
                    <div className="py-5">
                        <TableHeader />
                        <TableData ID={"0001"} Name={"215 RC"} Date={"06/25/2020"} Time={"09:45"} Ab_Magnitutde={"24.3"}
                            Min_Max_Est_Diamater={"0.0366906138 - 0.0820427065"} Relative_Velocity={"19.4850295284"} Hazard={"False"} />
                    </div>
                </div>
            </div>
        </div>
    );
}