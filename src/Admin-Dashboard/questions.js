import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { AiFillInfoCircle } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useHistory } from "react-router-dom";

export function Questions() {
  const [questions, getQuestions] = useState([]);
  const history = useHistory();

  const allQuestions = () => {
      fetch("http://localhost:9000/get-question", {
        method: "GET",
      })
        .then((data) => data.json())
        .then((question) => getQuestions(question));
  }
  useEffect(allQuestions, []);

const deleteQuestion = (_id) => {
  fetch(`http://localhost:9000/delete-question/${_id}`, {
    method: "DELETE",
  })
  .then(() => allQuestions());
};

  return (
    <div className="questions-map">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Questions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {questions.map(({ question, _id }, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{question}</td>
              <td>
                <AiFillInfoCircle
                  onClick={() => history.push(`/questions/${_id}`)}
                />
              </td>
              <td>
                <AiFillEdit
                  onClick={() => history.push(`/update-question/${_id}`)}
                />
              </td>
              <td>
                <AiFillDelete
                onClick={() => deleteQuestion(_id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
