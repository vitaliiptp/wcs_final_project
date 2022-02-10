import React from "react";

const ArrowLeft = ({props, stroke}) => (
    <svg width={7} height={10} xmlns="http://www.w3.org/2000/svg" className="mb-[0.1rem] mr-[0.5rem]" {...props}>
        <path d="M6 9 2 5l4-4" stroke={stroke} strokeWidth={2} fill="none" />
    </svg>
)

export default ArrowLeft