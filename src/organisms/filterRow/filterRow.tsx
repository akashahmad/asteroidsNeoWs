import React from 'react'
import ListHeading from '../../atoms/listHeading/listHeading'
import FiltersInput from '../../molecules/listFilterInputs/listFilterInputs'

interface ListFilterInputs {
    placeholder: string;
    type: string;
    mainHeading: string;
}
export default ({ placeholder, type, mainHeading }: ListFilterInputs) => {
    return (
        <div className="w-full flex flex-col justify-center items-center md:flex-row lg-flex-row xl-flex-row md:justify-between lg:justify-between xl:justify-between py-5">
            <ListHeading mainHeading={mainHeading} />
            <FiltersInput  placeholder={placeholder} type={type} />
        </div>
    );
}