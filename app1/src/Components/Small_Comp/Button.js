import React from "react";

const Button = ({
   className, //This props sets the class name for the button element
   id, // sets id for the button element
   children, // represents the children element   
   onClick // handles the onClick function
     }) => {
  return <button id={id} className={className} onClick={onClick}>{children}</button>;
};

export default Button;

