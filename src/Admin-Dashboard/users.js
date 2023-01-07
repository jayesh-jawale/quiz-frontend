import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

export function Users() {
  const [user, getUser] = useState([]);

  useEffect(() => {
    fetch("https://quiz-backend-nine.vercel.app/user/get-user", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((users) => getUser(users));
  }, []);

  return (
    <div className="users-map">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {user.map(({ name, email }, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
