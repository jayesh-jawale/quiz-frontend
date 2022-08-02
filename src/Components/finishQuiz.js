import React from "react";

import { quizContext } from "../App";

export function FinishQuiz() {

    const {score} = React.useContext(quizContext);

    return (
        <h1>
            Your score is : {score}
        </h1>
    )
}
