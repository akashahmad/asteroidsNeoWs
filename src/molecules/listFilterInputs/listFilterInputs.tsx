import React from 'react'
import DateInput from '../../atoms/searchByDateInput/searchByDateInput'
import Input from '../../atoms/input/input'
import Label from '../../atoms/filterLabels/filterLabels'

interface ListFilterInputs {
    placeholder: string;
    type: string;
}
const onChange = () => {
    console.log("e")
}
export default ({ placeholder, type }: ListFilterInputs) => {
    return (
        <div className="flex flex-column md:flex-row xl:flex-row lg:flex-row">
            <div>
                <Label label={"Search By Id"} />
                <Input onChange={onChange} placeholder={placeholder} type={type} />
            </div>
            <div>
                <Label label={"Start Date"} />
                <DateInput />
            </div>
            <div>
                <Label label={"End Date"} />
                <DateInput />
            </div>
        </div>
    );
}
