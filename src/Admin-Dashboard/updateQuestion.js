import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

export function UpdateQuestion() {
  const [questions, getQuestions] = useState(null);
  const { _id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9000/get-question/${_id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((questionData) => getQuestions(questionData));
  }, [_id]);

  return questions ? <EditQuestion questions={questions} /> : "";
}

const EditQuestion = ({ questions }) => {
  const [question, setQuestion] = useState(questions.question);
  const [option1, setOption1] = useState(questions.option1);
  const [option2, setOption2] = useState(questions.option2);
  const [option3, setOption3] = useState(questions.option3);
  const [option4, setOption4] = useState(questions.option4);

  const history = useHistory();

  const updateQuestion = () => {
    const updateQuestionData = {
      question,
      option1,
      option2,
      option3,
      option4,
    };

    fetch(`http://localhost:9000/update-question/${questions._id}`, {
      method: "PUT",
      body: JSON.stringify(updateQuestionData),
      headers: { "Content-type": "application/json" },
    }).then(() => history.push("/questions"));
  };

  return (
    <div className="js-container">
      <div className="update-question-details">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              type="text"
              placeholder="Question"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
              type="text"
              placeholder="Option1"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
              type="text"
              placeholder="Option2"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              value={option3}
              onChange={(e) => setOption3(e.target.value)}
              type="text"
              placeholder="Option3"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              value={option4}
              onChange={(e) => setOption4(e.target.value)}
              type="text"
              placeholder="Option4"
            />
          </Form.Group>
        </Form>
        <Button onClick={updateQuestion} variant="primary" type="submit">
          Update
        </Button>
      </div>
    </div>
  );
};
