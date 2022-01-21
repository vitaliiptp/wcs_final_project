import React from 'react';

const CategoryTag = ({category}) => {
    return (
        <div className="h-[1.875rem] bg-white-dark rounded-[0.625rem] pt-[0.313rem] pb-[0.375rem] px-[1rem] text-sb-13">{category || "dummy item"}</div>
    );
};

export default CategoryTag;