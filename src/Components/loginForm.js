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

    fetch("https://quiz-backend-nine.vercel.app/user/login", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: { "Content-type": "application/json" },
    }).then((resp) => {
      if (resp.status === 401) {
        history.push("/");
      } else if (resp.status === 200) {
        history.push("/select-course");
      } else {
        history.push("/dashboard");
      }
      sessionStorage.setItem("isAuthenticated", "true");
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
          <span>
            <b>Admin: </b>jawalejayesh123@gmail.com / Password123
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>
            <b>User: </b>n@n.com / jayesh
          </span>
        </Col>
      </Row>
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
