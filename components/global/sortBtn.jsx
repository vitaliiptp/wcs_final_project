import React, {useEffect, useState} from "react";


const SortBtn = ({items}) => {
  const [sortedData, setSortedData] = useState(false);

  const sortArray = (category) => {
      const categories = {
          MostUpvotes: "Most Upvotes",
          LeastUpvotes: "Least Upvotes",
          MostComments: "Most Comments",
          LeastComments: "Least Comments",
      };
      const sortProperty = categories[category];
      const sorted = [...items].sort((a, b) => b[sortProperty] - a[sortProperty]);
      console.log(sorted);
      setSortedData(sorted);
  };

  return (
    <label className="ml-[2rem] bg-blue-dark text-n-14" htmlFor="sortOptions">
      Sort by :
      <select
        className="pl-[0.5rem] bg-blue-dark text-b-14_w cursor-pointer"
        name="sortOptions"
        id="sortOptions"
        // onChange={(e) => sortArray(e.target.value)}
      >
        <option value="MostUpvotes">Most Upvotes</option>
        <option value="LeastUpvotes">Least Upvotes</option>
        <option value="MostComments">Most Comments</option>
        <option value="LeastComments">Least Comments</option>
      </select>
    </label>
  );
};

export default SortBtn;
