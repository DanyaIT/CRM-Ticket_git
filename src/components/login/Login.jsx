import React, { useState, useEffect } from "react";
import {
  Form,
  Row,
  Col,
  Container,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { loginLoading, loginAccess, loginError } from "./loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../api/userApi";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../pages/dashboard/userAction";

const Login = ({ formSwitcher }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("e@e4.com");
  const [password, setPassword] = useState("secret123");
  const { isAuth, isLoading, error } = useSelector((state) => state.login);

  useEffect(() => {
    if (sessionStorage.getItem("createJWT")) {
      navigate("/dashboard");
    } 
    else {
      dispatch(loginError());
    }
  }, [navigate, isAuth, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Заполните форму!");
    }
    dispatch(loginLoading());
    try {
      const isAuth = await userLogin({ email, password });
      if (isAuth.status === "error") {
        return dispatch(loginError(isAuth.message));
      }
      dispatch(loginAccess());
      dispatch(getUserProfile());
      navigate("/dashboard");
    } catch (error) {
      dispatch(loginError(error));
    }
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default: alert('Заполните поля!')
    }
  };
  return (
    <Container className="d-flex, w-100">
      <Row>
        <Col>
          <h2 className="text-center">Авторизация</h2>
          <hr />
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group style={{ marginTop: "5px" }}>
              <Form.Label>Адрес электронной почты</Form.Label>
              <Form.Control
                onChange={handleOnchange}
                value={email}
                type="email"
                name="email"
                placeholder="Укажите почту"
                required
              />
            </Form.Group>
            <Form.Group style={{ marginTop: "10px" }}>
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                onChange={handleOnchange}
                value={password}
                autoComplete = 'on'
                type="password"
                name="password"
                placeholder="Укажите пароль"
                required
              />
            </Form.Group>
            <Button
              onClick={handleSubmit}
              type="submit"
              style={{ marginTop: "15px" }}
            >
              Войти
            </Button>
            {isLoading && <Spinner variant="primary" animation="border" />}
          </Form>
          <hr />
        </Col>
      </Row>
      <Row className="pb-2">
        <Col sm = {5}>
          <div style={{cursor:'pointer', color:'blue'}} onClick={() => formSwitcher("reset")}> Забыли пароль?</div>
        </Col>
        <Col>
          <div style={{cursor:'pointer', color:'blue'}} onClick = {()=> navigate("/registration")}>Вы зашли в первый раз?</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
