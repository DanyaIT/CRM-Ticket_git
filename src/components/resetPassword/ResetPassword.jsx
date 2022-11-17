import React, {useState} from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";

const ResetPassword = ({handleSubmit,handleOnchange, email, formSwitcher}) => {
  return (
    <Container className="d-flex, w-100">
      <Row>
        <Col>
          <h2 className="text-center">Сброс пароля</h2>
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
            <Button
            onClick={handleSubmit} 
            type="submit" 
            style={{ marginTop:'15px'}}>Сбросить</Button>
          </Form>
          <hr/>
        </Col>
      </Row>
      <Row>
        <a 
        onClick={()=>formSwitcher('login')}
        className = 'pb-3' 
        href="/">Войти сейчас</a>
      </Row>
    </Container>
  );
};

export default ResetPassword;
