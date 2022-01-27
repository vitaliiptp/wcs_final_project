import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const FeedbackCategories = () => {
  const { categories, filteredCategory, filterItems } = useContext(AppContext);

  return (
    <div className="w-[16rem] h-[10.375rem] bg-white-normal mr-[1.875rem] p-[1.5rem] rounded-[0.625rem]">
      {categories.map((category, index) => {
        return (
          <button
            key={`category${index}`}
            className={
              category === filteredCategory
                ? "filter-cat-btn_active"
                : "filter-cat-btn"
            }
            type="button"
            onClick={() => filterItems(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackCategories;
