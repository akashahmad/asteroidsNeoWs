import React from 'react'

interface LabelProps {
    label?: string | null;
}
export default ({ label }: LabelProps) => {
    return (
         <label className="font-sans px-2 text-gray-600 text-base font-semibold not-italic text-center text-current">
            {label || "label"}
        </label>
    );
}

