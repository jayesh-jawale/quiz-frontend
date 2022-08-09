import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export function Dashboard() {
  const history = useHistory();

  const logMeOut = () => {
    sessionStorage.clear();
    history.push('/')
  }

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
        <Link to="/add-question">
        <Button variant="light">Add Question</Button>
        </Link>
        <Button onClick={() => logMeOut()} variant="light">Logout</Button>
      </div>
    </div>
  );
}
