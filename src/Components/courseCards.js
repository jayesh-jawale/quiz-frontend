import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export function CourseCards() {
  const history = useHistory();
  return (
    <div className="course-cards">
      <Card style={{ width: "15rem", borderRadius: "10px",   backgroundColor: "darkkhaki"}}>
        <Card.Img style={{ padding: "20px" }} variant="top" src="https://www.computerhope.com/jargon/j/javascript.png" />
        <Card.Body>
          <Button onClick={() => history.push('/javascript')} style={{ width: "70%", borderRadius: "10px" }} variant="secondary">Javascript</Button>
        </Card.Body>
      </Card>
    </div>
  );
}