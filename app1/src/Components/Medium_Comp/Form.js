import React, { useState, useEffect } from "react";
import Input from "../Small_Comp/Input";
import Button from "../Small_Comp/Button";
import CheckBox from "../Small_Comp/CheckBox";
import axios from "axios";
import { API_URL } from "../../API/API_URL";
import { useNavigate, useParams } from "react-router-dom";

const Form = () => {

  //Creating state using useState

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch id from URL

  const { id } = useParams();

  useEffect(() => {
    if (id) {

      //Fetch data from server

      axios.get(API_URL + id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setChecked(response.data.checked);
      });
    }
  }, [id]);

 // update the state 

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleCheckChange = (e) => {
    setChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (id !== undefined) {
      console.log(id);
      // updating an existing record
      await axios.put(API_URL + id, {
        firstName,
        lastName,
        checked,
      });
    } else {
      console.log(id);
      // Create a new record
      await axios.post(API_URL, {
        firstName,
        lastName,
        checked,
      });
    }

    //Reset the state Variables

    setFirstName("");
    setLastName("");
    setChecked(false);
    setLoading(false);

    // Redirect the Page after Submission
    navigate("/read");
  };
  return (
    <>
      <form onSubmit={handleSubmit}> 
        <h1>FORM</h1>
        <label className="mt-2">Enter Your FirstName: </label>
        <Input
          name="First name"
          value={firstName} // Pass firstName as props
          onChange={handleFirstNameChange}
        />
        <label className="mt-2">Enter Your LastName: </label>
        <Input
          name="Last name"
          value={lastName} // Pass lastName as props
          onChange={handleLastNameChange}
        />
        <CheckBox onChange={handleCheckChange} checked={checked} /> I agree
        <Button id="formBtn" className="btn btn-success">
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </>
  );
};

export default Form;
