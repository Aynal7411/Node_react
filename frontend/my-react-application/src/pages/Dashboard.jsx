import React from "react";

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.name}</p>
    </div>
  );
};

export default Dashboard;
