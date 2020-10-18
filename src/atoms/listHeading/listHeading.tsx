import React from 'react'

interface ListHeading {
    mainHeading?: string | null
}

export default ({ mainHeading }: ListHeading) => {
    return (
        <h1 className="text-base md:text-xl lg:text-2xl xl:text-2xl text-gray-600 font-semibold">
            {mainHeading}
        </h1>
    );
}