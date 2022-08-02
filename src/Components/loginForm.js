import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const userLogin = () => {
    const userDetails = {
      email,
      password,
    };

    fetch("http://localhost:9000/user/login", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: { "Content-type": "application/json" },
    }).then((resp) => {
      if (resp.status === 401) {
        alert("Login Fail");
        history.push("/");
      } else {
        alert("Login Success");
        history.push("/select-course");
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Fill Details");
    }

    userLogin();
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Login Form</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Form autoComplete="off" onSubmit={handleSubmit}>
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
              Login
            </Button>
            <hr />
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>Register to test your knowledge!</Col>
      </Row>
      <Row>
        <Col>
          <a href="/registration">Register Now</a>
        </Col>
      </Row>
    </Container>
  );
}
