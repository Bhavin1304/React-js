import React, { useState, useEffect } from "react";

export default function UserSession() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = sessionStorage.getItem("username");
    if (storedName) setUserName(storedName);
  }, []);

  const handleSave = () => {
    sessionStorage.setItem("username", userName);
  };

  return (
    <div className="bg-purple-100 p-4 rounded-xl mb-6 shadow">
      <h2 className="text-lg font-semibold mb-2">User</h2>
      <input
        type="text"
        placeholder="Enter User Name"
        className="border p-2 mr-2 rounded"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        onClick={handleSave}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Save
      </button>
      {userName && (
        <p className="mt-2">
          Current Session User: <strong>{userName}</strong>
        </p>
      )}
    </div>
  );
}
