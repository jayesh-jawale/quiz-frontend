import { Card, Button } from "react-bootstrap";
import {Stack}  from "react-bootstrap";

export function CourseCards() {
  return (
    // <Stack direction="horizontal" gap={3}>
    <div className="course-cards">
      <Card style={{ width: "15rem", borderRadius: "10px",   backgroundColor: "darkkhaki"}}>
        <Card.Img style={{ padding: "20px" }} variant="top" src="https://www.computerhope.com/jargon/j/javascript.png" />
        <Card.Body>
          <Button style={{ width: "70%", borderRadius: "10px" }} variant="secondary">Javascript</Button>
        </Card.Body>
      </Card>
    </div>
  );
}