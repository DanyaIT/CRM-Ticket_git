import React, { useEffect, useState } from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap'
import dateTicket from '../../assets/data/data-ticket.json'
import Message from '../../components/message/Message'
import MessageReply from '../../components/message/MessageRaply'
import { useParams } from 'react-router-dom'

const Ticket = () => {
    const {tid} = useParams();
    const [replymessage, setReplyMessage] = useState('')
    const [oneTicket, setOneTicket] = useState('')


const handleOnChange = (e)=>{
    const {value} = e.target
    setReplyMessage(value) 
} 

useEffect(()=>{
    for(let i= 0; i<dateTicket.length; i++){
        if(dateTicket[i].id == tid){
            setOneTicket(dateTicket[i])
            continue;
        }
    }
},[replymessage, tid])

  return (
    <Container>
        <Row className='mt-3'>
            <Col>
                <div className='topic'>Тема: {oneTicket.topic}</div>
                <div className='date'>Дата прочтения: {oneTicket.addedDat}</div>
                <div className='status'>Cтатус: {oneTicket.status}</div>
            </Col>
            <Col className='text-end mt-3'>
                <Button variant = 'info'>Закрыть заявку</Button>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
                <Message message={oneTicket.history}/>
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