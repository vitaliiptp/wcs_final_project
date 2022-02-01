import React from "react";
import NewFeedback from "../components/global/svg/newFeedback";
import GoBackBtn from "../components/goBackBtn";
import Dropdown from "../components/dropdown";
import Textfield from "../components/textfield";
import AppContext from "../context/AppContext";
import { useState, useContext } from "react";
import Link from 'next/link';

const dropdownOptions = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];

const AddFeedback = () => {

    const Context = useContext(AppContext);

    const [newFeedbackTitle, setNewFeedbackTitle] = useState('');
    const [newFeedbackCategory, setNewFeedbackCategory] = useState('Feature');
    const [newFeedbackDescription, setNewFeedbackDescription] = useState('');

    console.log(Context.filteredItems.length);

    function clearForm () {
        setNewFeedbackTitle(prevTitle => prevTitle = '')
        setNewFeedbackCategory(prevCategory => prevCategory = 'Feature')
        setNewFeedbackDescription(prevDescription => prevDescription = '')
    };

    function addNewFeedbackToData () {
       const newFeedbackObject = {
            id: Context.filteredItems.length + 1,
            title: newFeedbackTitle,
            category: newFeedbackCategory,
            upvotes: 0,
            status:'suggestion',
            description: newFeedbackDescription,
            comments: []
        }

        Context.setFilteredItems(prevContext => [...prevContext, newFeedbackObject])
    };

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="w-[33.75rem] mb-[4.25rem]">
                <GoBackBtn route='/'/>
            </div>
            <div className="w-[33.75rem] h-[41.063rem] rounded-[0.625rem] flex flex-col bg-white-normal items-center">
                <div className="absolute w-[28.5rem] mt-[-1.75rem]">
                    <NewFeedback/>
                </div>
                <div className="w-[28.5rem] mb-10 mt-[3.25rem]">
                    <span className="text-b-24">Create New Feedback</span>
                </div>   
                <Textfield 
                    label='Feedback Title' 
                    description='Add a short, descriptive headline'
                    input={newFeedbackTitle}
                    setInput={setNewFeedbackTitle}/>
                <Dropdown 
                    label='Category' 
                    description='Choose a category for your feedback' 
                    options={dropdownOptions}
                    input={newFeedbackCategory}
                    setInput={setNewFeedbackCategory}/>
                <Textfield 
                    label='Feedback Detail' 
                    description='Include any specific comments on what should be improved, added, etc.'
                    input={newFeedbackDescription}
                    setInput={setNewFeedbackDescription}/>
                <div className="w-[28.5rem] h-full flex justify-end items-center">
                    <div className="">
                        <button onClick={clearForm} className="mr-4 rounded-[0.625rem] px-6 pb-[0.719rem] pt-[0.781rem] bg-blue-deep hover:bg-blue-deep-hover text-b-14_w">Cancel</button>
                        <Link href={'/'} >
                            <button onClick={addNewFeedbackToData} className="rounded-[0.625rem] px-6 pb-[0.719rem] pt-[0.781rem] bg-purple-normal hover:bg-purple-normal-hover text-b-14_w">Add Feedback</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFeedback;
