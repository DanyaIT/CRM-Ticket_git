import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { newUserRegistration } from "./userRegistretionActions";
import { useDispatch, useSelector } from "react-redux";

const RegistrationForm = () => {
  const initialState = {
    name: "Danya",
    company: "MADI",
    phone: "79660184218",
    address: 'Кочновский проезд, 7к1',
    email: "Tanilka52753@mail.ru",
    password: "Tanilka52753@mail.ru",
    confirmPassword: "Tanilka52753@mail.ru",
  };

  const passwordErrors = {
    isLenthy: false,
    hasUpperChar: false,
    hasLowerChar: false,
    hasphone: false,
    hasSpecChar: false,
    confirmPassword: false,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState(initialState);
  const [passwordFail, setPasswordFail] = useState(passwordErrors);
  const { isLoading, status, message } = useSelector(
    state => state.userRegistration
  );

  useEffect(() => {}, [newUser]);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });

    if (name === "password") {
      const isLenthy = value.length >= 8;
      const hasUpperChar = /[A-Z]/.test(value);
      const hasLowerChar = /[a-z]/.test(value);
      const hasphone = /[0-9]/.test(value);
      const hasSpecChar = /[@,#,$,%,*]/.test(value);
      setPasswordFail({
        ...passwordFail,
        isLenthy,
        hasUpperChar,
        hasLowerChar,
        hasphone,
        hasSpecChar,
      });
    }

    if (name === "confirmPassword") {
      setPasswordFail({
        ...passwordFail,
        confirmPassword: newUser.password === value,
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      company,
      phone,
      address,
      email,
      password,
    } = newUser
    const registrationData = {
      name,
      company,
      phone,
      address,
      email,
      password,
    }
    dispatch(newUserRegistration(registrationData));
  };

  return (
    <Container className="p-3">
      <Row>
        <Col>
          <h1 style={{ textAlign: "center" }}>Регистрация пользователя</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Полное имя</Form.Label>
              <Form.Control
                required={true}
                onChange={handleForm}
                name="name"
                value={newUser.name}
                type="text"
                placeholder="Укажите имя"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Название компании</Form.Label>
              <Form.Control
                onChange={handleForm}
                name="company"
                value={newUser.company}
                type="text"
                placeholder="Укажите название компании"
              />
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Адрес</Form.Label>
              <Form.Control
                onChange={handleForm}
                name="address"
                value={newUser.address}
                type="text"
                placeholder="Укажите адрес"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Телефон</Form.Label>
              <Form.Control
                onChange={handleForm}
                name="phone"
                value={newUser.phone}
                type="phone"
                placeholder="Укажите рабочий номер"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Электронная почта</Form.Label>
              <Form.Control
                onChange={handleForm}
                value={newUser.email}
                name="email"
                type="email"
                placeholder="Укажите электронную почту"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                onChange={handleForm}
                value={newUser.password}
                name="password"
                type="password"
                placeholder="Укажите пароль"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Подтверждение пароля</Form.Label>
              <Form.Control
                onChange={handleForm}
                value={newUser.confirmPassword}
                name="confirmPassword"
                type="password"
                placeholder="Повторите пароль"
              />
              <Form.Text>
                {!passwordFail.confirmPassword && (
                  <div className="text-danger">Пароли не совпадают</div>
                )}
              </Form.Text>
            </Form.Group>
            <ul>
              <li
                className={
                  passwordFail.isLenthy ? "text-success" : "text-danger"
                }
              >
                Минимум 8 символов
              </li>
              <li
                className={
                  passwordFail.hasUpperChar ? "text-success" : "text-danger"
                }
              >
                По крайней мере одна заглавная буква
              </li>
              <li
                className={
                  passwordFail.hasLowerChar ? "text-success" : "text-danger"
                }
              >
                По крайней мере одна прописная буква
              </li>
              <li
                className={
                  passwordFail.hasphone ? "text-success" : "text-danger"
                }
              >
                По крайней мере одна цифра
              </li>
              <li
                className={
                  passwordFail.hasSpecChar ? "text-success" : "text-danger"
                }
              >
                По крайней мере один из спциальных символов @ # $ % *
              </li>
            </ul>
            <Row className="align-items-center">
              <Col>
                <a onClick={() => navigate("/")} href="#">
                  Вернуться к авторизации
                </a>
              </Col>
              <Col sm={7}>
                <Button
                  className="mt-2 p-2 w-100"
                  variant="primary"
                  type="submit"
                  disabled={Object.values(passwordFail).includes(false)}
                >
                  Зарегистрироваться
                </Button>
              </Col>
            </Row>
            <Row>
              {isLoading && <Spinner variant="primary" animation="border" />}
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default RegistrationForm;
