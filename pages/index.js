import React from "react";

import Feedbacks from "../components/Feedbacks";
import { useState } from 'react';
import items from "../data.json";
import SuggestionCat from '../components/Buttons/SuggestionCat';

const allCategories = ["All","UX","UI", ...new Set(items.productRequests.map(item => item.category))];

export default function Home() {
  const [menuItem,setMenuItem] = useState(items.productRequests);
    const [suggestionButtonCat, setSuggestionButtonCat] = useState(allCategories);
    console.log(suggestionButtonCat);
    
    const filter = (button) => {
        if(button==="All"){
            setMenuItem(items.productRequests);
            return;
        }
        const filterCategories = items.productRequests.filter(item => item.category === button);
        setMenuItem(filterCategories)
    }
 
  return (
    <div>
  <SuggestionCat button = {suggestionButtonCat} filter = {filter}/>
        <Feedbacks menuItem = {menuItem} />
    </div>
  )
}
