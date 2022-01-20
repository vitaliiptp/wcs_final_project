import React from 'react'

function SuggestionCat({button,filter}) {
    return (
        <div className="">
            {button.map((cat,index) => {
                return <button key= {index}
                className= "bg-white-dark text-blue-normal m-px hover:bg-white-dark-hover focus:text-white-normal focus:bg-blue-normal px-4 py-2 rounded-[0.625rem]" 
                type="button" 
                onClick={()=> filter(cat)}>{cat}</button>
            }
            )}
        </div>
    )
}

export default SuggestionCat;
