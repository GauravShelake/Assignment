import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("http://localhost:3001/auth/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUsers();
  }, []);


  return (
    <div className="user-list-container">
      <h2>Registered Users</h2>
      <table className="user-list-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Role</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.username}</td> 
              <td>{user.username}</td>
              <td>Developer</td> 
              <td>Yes</td>  
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
