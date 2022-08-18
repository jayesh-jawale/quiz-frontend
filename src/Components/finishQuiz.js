import React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { quizContext } from "../App";

export function FinishQuiz() {
  const { score, setScore } = React.useContext(quizContext);

  const history = useHistory();

  const logMeOut = () => {
    setScore((score) - (score))
    sessionStorage.clear();
    history.push('/')
  }

 const retakeQuiz = () => {
    setScore((score) - (score))
    history.push('/select-course')
  }

  return (
    <React.Fragment>
      <div className="end-quiz">
        <div>Hi , your score is : {score}</div>
        <div className="end-quiz-buttons">
          <Button onClick={() => retakeQuiz()} variant="outline-primary">Retake Quiz</Button>
          <Button onClick={() => logMeOut()} variant="outline-primary">Logout</Button>
        </div>
      </div>
    </React.Fragment>
  );
}
