import React from "react";
import { useSelector } from 'react-redux'
// add any needed imports here

function Users() {
  const users = useSelector((state) => state.users)
  const userCount = useSelector((state) => state.users.map(user => user.username)).length

  return (
    <div>
      <ul>
        Users!
        {users.map(user => <li>{user.username}</li>)}
        Total Users: {userCount}
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
      </ul>
    </div>
  );
}

export default Users;
