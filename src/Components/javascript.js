import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { quizContext } from "../App";

export function Javascript() {
  const {
    score,
    setScore,
    activeQuestion,
    setActiveQuestion,
  } = React.useContext(quizContext);

  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState([]); // All questions in db
  const [optionChosen, setOptionChosen] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  const history = useHistory();

  useEffect(() => {
    async function getQuestions() {
      const resp = await fetch("https://jayesh-quiz.herokuapp.com/get-question");
      const data = await resp.json();
      setQuestions(data);
      setActiveQuestion(data[count]);
    };
    getQuestions()
  }, [count, setActiveQuestion])

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const handleNextItem = () => {
    document.getElementById(selectedOption).checked = false;

    setActiveQuestion(questions[count + 1]);
    setCount(count + 1);

    if (activeQuestion.answer === optionChosen) {
      setScore(score + 1);
    }
  };

  const handleFinish = () => {
    if (activeQuestion.answer === optionChosen) {
      setScore(score + 1)
    } else {
      setScore(score)
    }
    history.push("/end-quiz");
  };

  return activeQuestion ? (
    <div className="js-container">
      <div className="js-header">
        {count + 1} / {questions.length}
        <img
          src="https://www.computerhope.com/jargon/j/javascript.png"
          width={"100px"}
          height={"100px"}
          alt="js"
        />
        Time
      </div>

      <div className="js-quiz">
        <div className="question">
          <span>{activeQuestion.question}</span>
        </div>

        <div className="question-options">
          <div>
            <input
              type="radio"
              name="size"
              value={activeQuestion.option1}
              id="option1"
              style={{ margin: "10px" }}
              onClick={() => {
                setSelectedOption("option1");
                chooseOption(activeQuestion.option1);
              }}
            />
            <label htmlFor="option1">{activeQuestion.option1}</label>
          </div>
          <div>
            <input
              type="radio"
              name="size"
              value={activeQuestion.option2}
              id="option2"
              style={{ margin: "10px" }}
              onClick={() => {
                setSelectedOption("option2");
                chooseOption(activeQuestion.option2);
              }}
            />
            <label htmlFor="option2">{activeQuestion.option2}</label>
          </div>
          <div>
            <input
              type="radio"
              name="size"
              value={activeQuestion.option3}
              id="option3"
              style={{ margin: "10px" }}
              onClick={() => {
                setSelectedOption("option3");
                chooseOption(activeQuestion.option3);
              }}
            />
            <label htmlFor="option3">{activeQuestion.option3}</label>
          </div>
          <div>
            <input
              type="radio"
              name="size"
              value={activeQuestion.option4}
              id="option4"
              style={{ margin: "10px" }}
              onClick={() => {
                setSelectedOption("option4");
                chooseOption(activeQuestion.option4);
              }}
            />
            <label htmlFor="option4">{activeQuestion.option4}</label>
          </div>
        </div>
      </div>

      {activeQuestion === questions[questions.length - 1] ? (
        <Button
          as="input"
          style={{ margin: "10px", width: "80%", borderRadius: "30px" }}
          onClick={handleFinish}
          type="button"
          value="Finish"
        />
      ) : (
        <Button
          as="input"
          style={{ margin: "10px", width: "80%", borderRadius: "30px" }}
          onClick={handleNextItem}
          type="button"
          value="Next"
        />
      )}
    </div>
  ) : (
    console.log("Null")
  );
}
