import React from "react";
import { Row, Container, Col, Form,Button} from "react-bootstrap";
import './formTicket.css'

const FormTicket = ({handleOnSubmit,handleOnChange, formInfo,formInfoEr}) => {
  return (
    <Container className="form__ticket">
          <Form className ='form__ticket-items'>
          <h1 className="text-center mb-4 text-secondary">Добавить вопрос</h1>
            <Form.Group as = {Row}>
              <Form.Label column sm = {1}>Тема</Form.Label>
              <Col sm = {11}>
                 <Form.Control 
                 onChange={handleOnChange}
                 type="text" 
                 name="topic"
                 value={formInfo.topic}
                 placeholder="Тематика вопроса"
                 required
                 />
                <Form.Text className="text-danger">
                  {formInfoEr.topic && 'Недопустимое значение'}
                </Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as = {Row} className = 'mt-3' >
              <Form.Label column sm = {3}>Дата вопроса</Form.Label>
              <Col sm = {9}>
              <Form.Control 
              type="date"
              onChange={handleOnChange}
              value={formInfo.date}
              name = 'date'
              required
              />
              </Col>
            </Form.Group>
            <Form.Group className = 'mt-3'>
              <Form.Label>Описание</Form.Label>
              <Form.Control
              onChange={handleOnChange}
              value = {formInfo.description}
              placeholder="Опишите вопрос"
              rows='5'
              name="description"
              as="textarea" 
              required
              />
            </Form.Group>
            <Button 
            type = 'submit' 
            className = 'mt-3 w-100'
            onClick={handleOnSubmit}
            >
            Сохранить</Button>
          </Form>
    </Container>
  );
};

export default FormTicket;
