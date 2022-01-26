import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";

const SortBtn = () => {
  const { setSortCriteria } = useContext(AppContext);


  return (
    <label className="ml-[2rem] bg-blue-dark text-n-14" htmlFor="sortOptions">
      Sort by :
      <select
        className="pl-[0.5rem] bg-blue-dark text-b-14_w cursor-pointer"
        name="sortOptions"
        id="sortOptions"
        onChange={(e) => setSortCriteria(e.target.value)}
      >
          <option value="Select Option">Select Option</option>
          <option value="Most Upvotes">Most Upvotes</option>
        <option value="Least Upvotes">Least Upvotes</option>
        <option value="Most Comments">Most Comments</option>
        <option value="Least Comments">Least Comments</option>
      </select>
    </label>
  );
};

export default SortBtn;
