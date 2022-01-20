import React from 'react';

const CategoryBtn = ({category}) => {
    return (
        <button className="h-[1.875rem] bg-white-dark rounded-[0.625rem] pt-[0.313rem] pb-[0.375rem] px-[1rem] font-semibold text-[0.8rem] text-blue-normal">{category || "dummy item"}</button>
    );
};

export default CategoryBtn;