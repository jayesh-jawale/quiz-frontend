import React from "react";

import { quizContext } from "../App";

export function FinishQuiz() {
  const { score } = React.useContext(quizContext);

  return <div className="end-quiz">Hi , your score is : {score}</div>;
}
