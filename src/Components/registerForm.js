import { useHistory } from "react-router-dom";
import { useState } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const userRegister = () => {
    const userRegistrationDetails = {
      name,
      email,
      password,
    };

    fetch("https://quiz-backend-nine.vercel.app/user/register", {
      method: "POST",
      body: JSON.stringify(userRegistrationDetails),
      headers: { "Content-type": "application/json" },
    }).then((resp) => {
      if (resp.status === 401) {
        alert("Email already exists");
      } else {
        alert("User Created");
        history.push("/");
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    userRegister();
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Registration Form</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <hr />
            <Button variant="primary" type="submit">
              Register
            </Button>
            <hr />
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>Already have an account</Col>
      </Row>
      <Row>
        <Col>
          <a href="/">Login Now</a>
        </Col>
      </Row>
    </Container>
  );
}
