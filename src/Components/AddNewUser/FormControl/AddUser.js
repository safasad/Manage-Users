import React, { useState } from "react";
import "./AddUser.css";

import Button from "../../UI/Button";
import ErrorModal from "../../UI/errorModel/errorModel";

const AddUser = (props) => {
  let [enteredName, setEnteredName] = useState("");
  let [enteredAge, setEnteredAge] = useState("");
  let [error, setError] = useState();

  const setName = (event) => {
    setEnteredName(event.target.value);
  };
  const setAge = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Inputs ",
        message: "Please enter valid name and age (non empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      // + here mean convert string to number
      setError({
        title: "Invalid age ",
        message: "Please enter valid age (>0)",
      });

      return;
    }

    const newUser = {
      name: enteredName,
      age: +enteredAge,
    };

    props.onAddUser(newUser);
    setEnteredName("");
    setEnteredAge("");
  };

  const errorHandler=()=>{
    setError(null)

  }
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form className="new-user" onSubmit={submitHandler}>
        <div className="new-user__controls" onSubmit={submitHandler}>
          <div className="new-user__control">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={enteredName}
              onChange={setName}
            />
          </div>
          <div className="new-user__control">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              onChange={setAge}
            />
          </div>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default AddUser;
