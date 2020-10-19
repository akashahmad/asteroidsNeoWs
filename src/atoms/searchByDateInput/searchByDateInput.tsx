import React from 'react'
import DatePicker from 'react-date-picker';
interface DatePickerInputs {
    value: Date|null;
    onChangeHandler: any;
}
export default ({value,onChangeHandler}:DatePickerInputs) => {
    return (
        <div className="pl-2">
            <DatePicker
                className="w-full font-sans font-semibold not-italic  text-current rounded p-3 outline-none"
                value={value ? new Date(value) : null} onChange={onChangeHandler}
            />
        </div>
    )
}