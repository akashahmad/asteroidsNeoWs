import React from 'react'
import DatePicker from 'react-date-picker';

export default () => {
    return (
        <div className="pl-2">
            <DatePicker
                className="w-full font-sans font-semibold not-italic  text-current rounded p-3 outline-none"
            />
        </div>
    )
}