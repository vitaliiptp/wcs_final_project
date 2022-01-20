import React from 'react';
import { useState } from 'react';
import items from "../data.json";
import Suggestions from '../components/suggestion';
import SuggestionCat from '../components/Buttons/SuggestionCat';

const allCategories = ["All","UX","UI", ...new Set(items.productRequests.map(item => item.category))];

console.log(allCategories);

function suggestionsPage() {
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
            <h1>test Suggestions</h1><hr></hr>
            <SuggestionCat button = {suggestionButtonCat} filter = {filter}/>
            <Suggestions menuItem = {menuItem}/>
        </div>
    )
}

export default suggestionsPage;
