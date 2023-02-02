import React, {useState, useEffect} from "react";
import { Row, Container, Col, Form,Button, Spinner, Alert} from "react-bootstrap";
import './formTicket.css'
import { shortText } from "../../utils/validation";
import {useDispatch, useSelector} from 'react-redux'
import { addNewTicket } from "./addTicketActions";

const FormTicket = () => {

  const formType = {
    subject:'',
    date: '',
    message:''
  }
  
  const formTypeEr = {
    subject: false,
    date: false,
    message:false
  }
  
  const [formInfo, setFormInfo] = useState(formType)
  const [formInfoEr, setFormInfoEr] = useState(formTypeEr)
  const {user:{name}} = useSelector(state => state.user)
  const {isLoading, error, successMessage} = useSelector(state => state.newTicket)

  const dispatch = useDispatch()

  const handleOnChange = (e)=>{
      e.preventDefault()
      const {name, value} = e.target
      setFormInfo({
        ...formInfo,
        [name]:value
  
      })
  
    }

  const handleOnSubmit = async (e)=>{
  e.preventDefault()
    const validsubject =  await shortText(formInfo.subject)
    console.log(formInfo)
  
   setFormInfoEr({
      ...formTypeEr,
      subject: !validsubject
    })
    dispatch(addNewTicket({...formInfo, sender: name}))
  }
  
  useEffect(()=>{
  
  },[formInfo,formInfoEr])
  
  return (
    <Container className="form__ticket">
          <Form className ='form__ticket-items'>
          <h1 className="text-center mb-4 text-secondary">Добавить заявку</h1>
          <hr/>
          {isLoading && <Spinner variant="primary" animation = 'border'/>}
          {error && <Alert variant="danger">{error}</Alert>}
          {successMessage === 'Вы успешно отправили письмо' && <Alert variant="success">{successMessage}</Alert>}
          {successMessage === 'Укажите допустимые значения' && <Alert variant="danger">{successMessage}</Alert>}
            <Form.Group as = {Row}>
              <Form.Label column sm = {1}>Тема</Form.Label>
              <Col sm = {11}>
                 <Form.Control 
                 onChange={handleOnChange}
                 type="text" 
                 name="subject"
                 value={formInfo.subject}
                 placeholder="Тематика вопроса"
                 required
                 />
                <Form.Text className="text-danger">
                  {formInfoEr.subject && 'Недопустимое значение'}
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
              value = {formInfo.message}
              placeholder="Опишите вопрос"
              rows='5'
              name="message"
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
