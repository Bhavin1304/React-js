import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((s) => s.auth);

  return (
    <div className="container mt-3">
      <h2>User Profile</h2>
      <p>Name: {user?.name}</p>
    </div>
  );
}

export default Profile;
