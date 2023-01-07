import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export function AddQuestion() {
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [answer, setAnswer] = useState('');

  const history = useHistory();

  const addQuestion = () => {
    const addQuestionData = {
      question,
      option1,
      option2,
      option3,
      option4,
      answer
    };

    fetch('https://quiz-backend-nine.vercel.app/create-question', {
      method: "POST",
      body: JSON.stringify(addQuestionData),
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              type="text"
              placeholder="Answer"
            />
          </Form.Group>
        </Form>
        <Button onClick={addQuestion} variant="primary" type="submit">
          Add
        </Button>
      </div>
    </div>
  );
};
