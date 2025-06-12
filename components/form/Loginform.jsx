import React from "react";

const Loginform = ({ userName, userPss }) => {
  return (
    <>
      <h1>Login Form</h1>
      <p>Username: {userName}</p>
      <p>Password: {"*".repeat(userPss.length)}</p>
    </>
  );
};

export default Loginform;