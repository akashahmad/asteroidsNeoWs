import React from 'react'

interface LabelProps {
    label?: string | null;
}
export default ({ label }: LabelProps) => {
    return (
         <label className="font-sans text-base font-semibold not-italic text-center text-current">
            {label || "label"}
        </label>
    );
}
