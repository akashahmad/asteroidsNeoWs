import React from 'react'
import ListHeading from '../../atoms/listHeading/listHeading'
import FiltersInput from '../../molecules/listFilterInputs/listFilterInputs'


interface ListFilterInputs {
    placeholder: string;
    type: string;
    mainHeading: string;
    startDateHandler: any;
    startDate: Date|null;
    endDateHandler: any;
    endDate: Date|null
}
export default ({ placeholder, type, mainHeading, startDate, startDateHandler, endDateHandler, endDate }: ListFilterInputs) => {
    return (
        <div className="w-full flex flex-col justify-center items-center md:flex-row lg-flex-row xl-flex-row md:justify-between lg:justify-between xl:justify-between py-5">
            <ListHeading mainHeading={mainHeading} />
            <FiltersInput  placeholder={placeholder} type={type} startDateHandler={startDateHandler} endDateHandler={endDateHandler} startDate={startDate} endDate={endDate} />
        </div>
    );
}