import React from 'react'

function ButtonCat({button,filter}) {
    return (
        <div class="">
            {button.map((cat,i) => {
                return <button 
                class= "bg-blue-light m-px hover:underline text-white-normal px-4 py-2 rounded-[0.625rem]" 
                type="button" 
                onClick={()=> filter(cat)}>{cat}</button>
            }
            )}
        </div>
    )
}

export default ButtonCat;
