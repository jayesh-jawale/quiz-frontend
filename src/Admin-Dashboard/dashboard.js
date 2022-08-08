import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Dashboard() {

  return (
    <div className="dashboard">
      <div className="buttons-data">
        <h3>Admin Dashboard</h3>
      </div>

      <div className="navbar-buttons">
        <Link to="/users">
        <Button variant="light">Users</Button>
        </Link>
        <Link to="/questions">
        <Button variant="light">Questions</Button>
        </Link>
        <Button variant="light">Logout</Button>
      </div>
    </div>
  );
}
