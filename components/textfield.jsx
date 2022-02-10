import React, {useState} from 'react';

export default function Textfield({label, description, input, setInput}) {

  return (
    <div className="flex flex-col items-start mb-6">
        <label className="text-b-14" htmlFor="feedbackCategory">{label}</label>
        <span className="text-n-14 mb-4">{description}</span>
        <input 
            id="feedbackTitle" 
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)} 
            maxLength={300}
            className="m-0 w-[28.5rem] min-h-[3rem] px-6 rounded-[0.313rem] border-[0.063rem] border-white-light hover:border-blue-normal focus:border-blue-normal  bg-white-light text-blue-deep text-left" 
            />

    </div>
  );
}