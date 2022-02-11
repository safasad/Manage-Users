import React from "react";
import Classes from './allUsers.module.css'
import Card from '../UI/card/card'
const AllUsers = (props) => {
  console.log(props.users);
  return (
    <Card className={Classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default AllUsers;
