import React from 'react'

interface HeadingProps {
    heading?: string | null;
}
export default ({heading}: HeadingProps) => {
    return (
        <div className="bg-gray-600">
            {heading || "Heading"}
        </div>
    );
}
