
import EditFeedbackIcon from '../../../components/global/svg/editFeedbackIcon';
import Textfield from '../../../components/textfield';
import Dropdown from '../../../components/dropdown';
import GoBackBtn from '../../../components/goBackBtn';
import { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import AppContext from '../../../context/AppContext';


export default function AddEditFeedback() {

    // get ID of Feedback out of HTTP-Query
    const router = useRouter();
    const feedbackId = router.query.id;


    // transalte ID into array Index
    const feedbackIndex = feedbackId - 1;

    // get State and StateUpdateFunction of Feedbacks Array from Context
    const { filteredItems, setFilteredItems } = useContext(AppContext);

    // create States to Feedback Properties to Update them 
    // where the default values are the existing ones from Context

    console.log("filteredItems", filteredItems);
    const [editedFeedbackTitle, setEditedFeedbackTitle] = useState(filteredItems[feedbackIndex].title);
    const [editedFeedbackCategory, setEditedFeedbackCategory] = useState(filteredItems[feedbackIndex].category);
    const [editedFeedbackStatus, setEditedFeedbackStatus] = useState(filteredItems[feedbackIndex].status);
    const [editedFeedbackDescription, setEditedFeedbackDescription] = useState(filteredItems[feedbackIndex].description);

    // create property list of dropdowns
    const dropdownCategory = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];
    const dropdownStatus = ['Suggestion', 'Planned', 'In-Progress', 'Live'];

    // BUTTON "Cancel" logic:
    function dropEdition() {
        setEditedFeedbackTitle(prevTitle => prevTitle = filteredItems[feedbackIndex].title)
        setEditedFeedbackCategory(prevCategory => prevCategory = filteredItems[feedbackIndex].category)
        setEditedFeedbackStatus(prevStatus => prevStatus = filteredItems[feedbackIndex].status)
        setEditedFeedbackDescription(prevDescription => prevDescription = filteredItems[feedbackIndex].description)
    };

    // BUTTON "Edit Feedback" logic:
    function addEditedFeedbackToContext() {
        
        const editedFeedback = {
            id: parseInt(feedbackId),
            title: editedFeedbackTitle,
            category: editedFeedbackCategory,
            upvotes: filteredItems[feedbackIndex].upvotes,
            status: editedFeedbackStatus,
            description: editedFeedbackDescription,
            comments: filteredItems[feedbackIndex].comments
        }
        // copy whole thing - context stuff
        const copyOfAllElements = [...filteredItems]

        // i pick the one from the copy version i want to edit 
        const itemIndex = copyOfAllElements.findIndex((item) => feedbackId == item.id)

        // pick the on ei want to edit - overwritting it x = c, x = b
        copyOfAllElements[itemIndex] = editedFeedback

        setFilteredItems(copyOfAllElements);

        router.push("/")
    };

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="w-[33.75rem] mb-[4.25rem]">
                <GoBackBtn route={`/feedback/${feedbackId}`} />
            </div>
            <div className="w-[33.75rem] h-[50rem] rounded-[0.625rem] flex flex-col bg-white-normal items-center mb-5">
                <div className="absolute w-[28.5rem] mt-[-1.75rem]">
                    <EditFeedbackIcon />
                </div>
                <div className="w-[28.5rem] mb-10 mt-[3.25rem]">
                    <span className="text-b-24">{`Editing '${filteredItems[feedbackIndex].title}'`}</span>
                </div>
                <Textfield
                    label='Feedback Title'
                    description='Add a short, descriptive headline'
                    input={editedFeedbackTitle}
                    setInput={setEditedFeedbackTitle} />
                <Dropdown
                    label='Category'
                    description='Choose a category for your feedback'
                    options={dropdownCategory}
                    input={editedFeedbackCategory}
                    setInput={setEditedFeedbackCategory} />
                <Dropdown
                    label='Update Status'
                    description='Change feedback state'
                    options={dropdownStatus}
                    input={editedFeedbackStatus}
                    setInput={setEditedFeedbackStatus} />
                <Textfield
                    label='Feedback Detail'
                    description='Include any specific comments on what should be improved, added, etc.'
                    input={editedFeedbackDescription}
                    setInput={setEditedFeedbackDescription} />
                <div className="w-[28.5rem] h-full flex justify-end items-center pd-5">
                    <div className="">
                        <button onClick={dropEdition} className="mr-4 rounded-[0.625rem] px-6 pb-[0.719rem] pt-[0.781rem] bg-blue-deep hover:bg-blue-deep-hover text-b-14_w">Cancel</button>
                        <button onClick={addEditedFeedbackToContext} className="rounded-[0.625rem] px-6 pb-[0.719rem] pt-[0.781rem] bg-purple-normal hover:bg-purple-normal-hover text-b-14_w">Add Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
