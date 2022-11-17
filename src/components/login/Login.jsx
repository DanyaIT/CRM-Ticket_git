import React, {useState} from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";

const Login = ({handleSubmit,handleOnchange, email, password, formSwitcher}) => {
  return (
    <Container className="d-flex, w-100">
      <Row>
        <Col>
          <h2 className="text-center">Авторизация</h2>
          <hr/>
          <Form>
            <Form.Group style={{marginTop:'5px'}}>
              <Form.Label>Адрес электронной почты</Form.Label>
              <Form.Control
                onChange={handleOnchange}
                value = {email}
                type="email"
                name="email"
                placeholder="Укажите почту"
                required
              />
            </Form.Group>
            <Form.Group style={{marginTop:'10px'}}>
              <Form.Label>Пароль</Form.Label>
                <Form.Control
                  onChange = {handleOnchange}
                  value={password}
                  type="password"
                  name="password"
                  placeholder="Укажите пароль"
                  required
                />
            </Form.Group>
            <Button
            onClick={handleSubmit} 
            type="submit" 
            style={{marginTop:'15px'}}>Войти</Button>
          </Form>
          <hr/>
        </Col>
      </Row>
      <Row>
        <a 
        onClick={()=> formSwitcher('reset')}
        className = 'pb-3' 
        href="/">Забыли пароль?</a>
      </Row>
    </Container>
  );
};

export default Login;
