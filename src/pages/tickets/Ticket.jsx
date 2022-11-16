import React, { useEffect, useState } from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap'
import dateTicket from '../../assets/data/data-ticket.json'
import Message from '../../components/message/Message'
import MessageReply from '../../components/message/MessageRaply'

const Ticket = () => {
    const arr = dateTicket[0]
    const [replymessage, setReplyMessage] = useState('')

const handleOnChange = (e)=>{
    const {value} = e.target
    setReplyMessage(value)
}

useEffect(()=>{

},[replymessage])

console.log(replymessage)
  return (
    <Container>
        <Row className='mt-3'>
            <Col>
                <div className='topic'>Тема: {arr.topic}</div>
                <div className='date'>Дата прочтения: {arr.addedDat}</div>
                <div className='status'>Cтатус: {arr.status}</div>
            </Col>
            <Col className='text-end mt-3'>
                <Button variant = 'info'>Закрыть заявку</Button>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
                <Message message={arr.history}/>
            </Col>
        </Row>
        <Row>
            <Col>
                <MessageReply replymessage = {replymessage} handleOnChange={handleOnChange}/>
            </Col>
        </Row>
    </Container>
  )
}

export default Ticket