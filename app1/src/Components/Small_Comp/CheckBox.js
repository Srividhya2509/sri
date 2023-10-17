import React from "react";

const CheckBox = ({
  checked, // This props determines whether the checkbox is checked or not
  onChange, // This props handles value changes in checkbox element
}) => {
  return (
    <>
      <input
        type="checkbox"
        className="mt-4"
        checked={checked}
        onChange={onChange}
      />
    </>
  );
};

export default CheckBox;