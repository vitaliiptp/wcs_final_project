import React from "react";


const Styles = [
    "btn--violet",
    "btn--blue",
    "btn--delete",
    "btn--cancel"
    
];
const Sizes = [
    "btn--large","btn--medium", "btn-small"
];

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {
    const checkButtonStyle = Styles.includes(buttonStyle) 
? buttonStyle 
: Styles[0];

const checkButtonSize = Sizes.includes(buttonSize)
? buttonSize
: Sizes[0];
 return (
     <button className = {`btn ${checkButtonStyle} ${checkButtonSize}`}
     onClick={onClick} 
     type={type}>
         {children}
    </button>
 );
};
export default Button;