import React, { useContext, useState, useEffect } from "react";
import YodlrAPI from "./YodlrAPI";
import "./Admin.css";
import User from "./User";

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const userResults = await YodlrAPI.getUsers();
      setUsers(userResults);
    }
    getUsers();
  }, []);

return (
  <div className="admin-container">
    <h1 className="admin-title">ADMIN PAGE</h1>
    <h3 className="admin-subtitle">List of all current users</h3>
    <div className="user-list">
      {users.map((user, index) => (
        <React.Fragment key={user.id}>
          <User
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            state={user.state}
          />
          {index % 2 === 1 && <div className="clear-both"></div>}
        </React.Fragment>
      ))}
    </div>
  </div>
);
}
export default Admin;