import React from 'react';
import { useState } from 'react';
import items from "../data.json";
import Suggestions from '../components/suggestion';
import ButtonCat from '../components/Buttons/buttonCat';

const allCategories = ["All", ...new Set(items.productRequests.map(item => item.category))];

console.log(allCategories);

function suggestionsPage() {
    const [menuItem,setMenuItem] = useState(items.productRequests);
    const [buttonCat, setButtonCat] = useState([allCategories]);
    
    const filter = (button) => {
        if(button==="All"){
            setMenuItem(items.productRequests);
            return;
        }
        const filterCategories = items.productRequests.filter(item => item.categories === button);
        setMenuItem(filterCategories)
    }
    return (
        <div>
            <h1>test Suggestions</h1><hr></hr>
            <ButtonCat button = {buttonCat} filter = {filter}/>
            <Suggestions menuItem = {menuItem}/>
        </div>
    )
}

export default suggestionsPage;
