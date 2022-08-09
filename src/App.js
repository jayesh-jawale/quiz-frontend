import "./App.css";
import { Dashboard } from "./Admin-Dashboard/dashboard";
import { QuestionDetails } from "./Admin-Dashboard/questionDetails";
import { UserDashboardRoute } from "./Admin-Dashboard/dashboardRoutes";
import { QuestionDashboardRoute } from "./Admin-Dashboard/dashboardRoutes";
import { SelectCourse } from "./Components/selectCourse";
import { Javascript } from "./Components/javascript";
import { FinishQuiz } from "./Components/finishQuiz";
import { LoginPage } from "./Components/loginPage";
import { RegistrationPage } from "./Components/registerPage";

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />

            <ProtectedRoute
              exact
              path="/users"
              component={UserDashboardRoute}
            />

            <ProtectedRoute
              exact
              path="/questions"
              component={QuestionDashboardRoute}
            />

            <ProtectedRoute
              exact
              path="/questions/:_id"
              component={QuestionDetails}
            />

            <ProtectedRoute
              exact
              path="/update-question/:_id"
              component={UpdateQuestion}
            />
            {/* Dashboard Routes End */}

            <ProtectedRoute
              exact
              path="/select-course"
              component={SelectCourse}
            />

            <ProtectedRoute exact path="/javascript" component={Javascript} />
            <ProtectedRoute exact path="/end-quiz" component={FinishQuiz} />
          </Switch>
        </quizContext.Provider>
      </Router>
    </div>
  );
}

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
