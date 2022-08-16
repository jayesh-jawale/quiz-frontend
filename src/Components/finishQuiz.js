import React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { quizContext } from "../App";

export function FinishQuiz() {
  const { score } = React.useContext(quizContext);

  const history = useHistory();

  const logMeOut = () => {
    sessionStorage.clear();
    history.push('/')
  }

  return (
    <React.Fragment>
      <div className="end-quiz">
        <div>Hi , your score is : {score}</div>
        <div className="end-quiz-buttons">
          <Button onClick={() => history.push('/select-course')} variant="outline-primary">Retake Quiz</Button>
          <Button onClick={() => logMeOut()} variant="outline-primary">Logout</Button>
        </div>
      </div>
    </React.Fragment>
  );
}
