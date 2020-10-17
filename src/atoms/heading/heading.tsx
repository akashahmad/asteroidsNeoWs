import React from 'react'

interface HeadingProps {
    heading?: string | null;
}
export default ({ heading }: HeadingProps) => {
    return (
        <div className="font-sans text-2xl font-semibold not-italic text-center text-current" >
            {heading || "Heading"}
        </div>
    );
}
