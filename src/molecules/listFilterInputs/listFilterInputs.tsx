import React from 'react'
import DateInput from '../../atoms/searchByDateInput/searchByDateInput'
import Input from '../../atoms/input/input'
import Label from '../../atoms/filterLabels/filterLabels'

interface ListFilterInputs {
    placeholder: string;
    type: string;
    startDateHandler: any;
    startDate: Date | null;
    endDateHandler: any;
    endDate: Date | null;
    asteroidId: any;
    setAsteroidId: any;
    searchById: any;
}
export default ({placeholder, type, startDate, startDateHandler, endDateHandler, endDate, asteroidId, setAsteroidId, searchById}: ListFilterInputs) => {
    return (
        <div className="flex flex-column md:flex-row xl:flex-row lg:flex-row">
            <div>
                <Label label={"Enter Asteroid ID"}/>
                <form onSubmit={(event) => searchById(event)}>
                    <Input onChange={setAsteroidId} required={true} placeholder={placeholder} type={type}
                           minLength={2} maxLength={50} value={asteroidId}
                    />
                </form>
            </div>
            <div>
                <Label label={"Start Date"}/>
                <DateInput value={startDate} onChangeHandler={startDateHandler}/>
            </div>
            <div>
                <Label label={"End Date"}/>
                <DateInput value={endDate} onChangeHandler={endDateHandler}/>
            </div>
        </div>
    );
}
