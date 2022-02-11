import React, { useState } from "react";
import "./App.css";
import AddUser from "./Components/AddNewUser/FormControl/AddUser";
import AllUsers from "./Components/AllUsers/allusers";

function App() {
  let [usersList, setUsersList] = useState([]);

  const addUsersHandler = (user) => {
    setUsersList((prevUsersList) => {
      // console.log("prevEnteredUsers", prevEnteredUsers);
      return [...prevUsersList,user];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUsersHandler} />
      
      {/* Show it only if there are users exist */}
     {usersList.length > 0 && <AllUsers users={usersList}/>}
    </div>
  );
}

export default App;
