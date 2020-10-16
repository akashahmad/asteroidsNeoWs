import React from 'react'

interface HeadingProps {
    heading: string;
}
const Heading: React.FC<HeadingProps> = (props) => {
    let {
        heading
    } = props;
    return (
        <div className="bg-gray-600">
            {heading}
        </div>
    );
}

export default Heading;