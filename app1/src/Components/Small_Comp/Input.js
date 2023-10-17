import React from "react";

const Input = ({ 
    name, // This props sets the id and name attribute of the input element
    value, // This props sets the initial value of input element
    onChange // This props handles the handleChange callback function
   }) => {
  return (
    <>
      <input
        type="text"
        className="form-control mt-1"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
