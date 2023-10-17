import React, { useEffect, useState } from "react";
import { API_URL } from "../../API/API_URL";
import axios from "axios";
import Button from "../Small_Comp/Button";
import { useNavigate } from "react-router-dom";

const Read = () => {
  // Creating state
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  // Redirect to Form Page
  const handleUpdate = (id) => {
    navigate(`/${id}`);
  }
  // sends delete request to the server
  const handleDelete = async (id) => {
    await axios.delete(API_URL + id);
    getAPI();
  };
  // get the data from server
  const getAPI = async () => {
    const resp = await axios.get(API_URL);
    setApiData(resp.data);
  };
  // Fetch the data when component is mounted
  useEffect(() => {
    getAPI();
  }, []);

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="bg-secondary">S.No</th>
            <th className="bg-secondary">First Name</th>
            <th className="bg-secondary">Last Name</th>
            <th className="bg-secondary">Checked</th>
            <th className="bg-secondary">Actions</th>
          </tr>
        </thead>
        <tbody>
          {apiData &&
            apiData.map((data, index) => (
              <tr key={data.id}>
                <td>{index + 1}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.checked ? "Checked" : "Not checked"}</td>
                <td>
                  <Button id="readBtn" className="btn btn-primary"
                  onClick={() => handleUpdate(data.id)}> 
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </Button>{" "}
                  <Button
                    id="delBtn"
                    className="btn btn-danger"
                    onClick={() => handleDelete(data.id)}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Read;
