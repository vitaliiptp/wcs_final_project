import React from "react";

const FeedbackCategories = ({ categories, filterCategory }) => {
  return (
    <div className="w-[16rem] h-[10.375rem] bg-white-normal mr-[1.875rem] p-[1.5rem] rounded-[0.625rem]">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="h-[1.875rem] bg-white-dark rounded-[0.625rem] mr-[0.5rem] mb-[0.875rem] pt-[0.313rem] pb-[0.375rem] px-[1rem] hover:bg-white-dark-hover focus:text-white-normal focus:bg-blue-normal text-sb-13"
            type="button"
            onClick={() => filterCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackCategories;
