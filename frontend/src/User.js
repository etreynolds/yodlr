import React from "react";
import "./User.css"

const User = ({firstName, lastName, email, state}) => {
  

  return (
    <div className="User">
    <p>First Name: {firstName}</p>
    <p>Last Name: {lastName}</p>
    <p>Email: {email}</p>
    <p>State: {state}</p>
    </div>
  )
}

export default User;