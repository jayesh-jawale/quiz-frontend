import "./App.css";
import { Dashboard } from "./Admin-Dashboard/dashboard";
import { Users } from "./Admin-Dashboard/users";
import { Questions } from "./Admin-Dashboard/questions";
import { QuestionDetails } from "./Admin-Dashboard/questionDetails";
import { SelectCourse } from "./Components/selectCourse";
import { Javascript } from "./Components/javascript";
import { FinishQuiz } from "./Components/finishQuiz";
import { LoginPage } from "./Components/loginPage";
import { RegistrationPage } from "./Components/registerPage";

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { UpdateQuestion } from "./Admin-Dashboard/updateQuestion";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

export const quizContext = React.createContext();

export default function App() {
  const [score, setScore] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(null); // Current question from db

  return (
    <div className="App">
      <Router>
        <quizContext.Provider
          value={{
            score,
            setScore,
            activeQuestion,
            setActiveQuestion,
          }}
        >
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route exact path="/registration">
              <RegistrationPage />
            </Route>

          {/* Dashboard Routes */}
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>

            <Route exact path="/users">
              <Dashboard />
              <Users />
            </Route>

            <Route exact path="/questions">
              <Dashboard />
              <Questions />
            </Route>

            <Route exact path="/questions/:_id">
              <QuestionDetails />
            </Route>
            
            <Route exact path="/update-question/:_id">
              <UpdateQuestion />
            </Route>
          {/* Dashboard Routes End */}

            <Route exact path="/select-course">
              <SelectCourse />
            </Route>

            <Route exact path="/javascript">
              <Javascript />
            </Route>
            <Route exact path="/end-quiz">
              <FinishQuiz />
            </Route>
          </Switch>
        </quizContext.Provider>
      </Router>
    </div>
  );
}