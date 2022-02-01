import React, {useState} from 'react';

const dropdownComponent = "relative"
const dropdownButton = "m-0 w-[28.5rem] min-h-[3rem] px-6 rounded-[0.313rem] border-[0.063rem] border-white-light hover:border-blue-normal focus:border-blue-normal  bg-white-light text-blue-deep text-left"
const dropdownMenu = "absolute top-[calc(100%+1rem)] m-0 w-[28.5rem] min-h-[3rem] px-6 rounded-[0.625rem] bg-white-light shadow-[0_10px_40px_-7px_rgba(55,63,104,0.350492]"
const dropdownItem = "hover:text-purple-normal cursor-pointer"

export default function App({label, description, options, input, setInput}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setInput(value);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-start mb-6">
        <label className="text-b-14" htmlFor="feedbackCategory">{label}</label>
        <span className="text-n-14 mb-4">{description}</span>
        <div className={dropdownComponent}>
            <button className={dropdownButton} onClick={toggling}>
            {input}
            </button>
            {isOpen && (
                <div className={dropdownMenu}>
                {options.map(option => (
                    <div className={dropdownItem} onClick={onOptionClicked(option)} key={Math.random()}>
                    {option}
                    </div>
                ))}
                </div>
            )}
        </div>
    </div>
  );
}




