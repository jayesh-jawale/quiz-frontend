import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

export function QuestionDetails() {
  const { _id } = useParams();
  const history = useHistory();

  const [questions, getQuestions] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9000/get-question/${_id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((questionData) => getQuestions(questionData));
  }, [_id]);

  return (
    <div className="js-container">
      <div className="question-details">
        <span>{questions.question}</span>
        <ol>
          <li>{questions.option1}</li>
          <li>{questions.option2}</li>
          <li>{questions.option3}</li>
          <li>{questions.option4}</li>
        </ol>
        <Button variant="primary" type="submit" onClick={() => history.push("/questions")}>
          Back
        </Button>
      </div>
    </div>
  );
}
