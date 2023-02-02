import React from 'react'
import { Container, Button, Col, Row } from 'react-bootstrap'
import TableTicket from '../../components/table-ticket/TableTicket'
import dataTickets from '../../assets/data/data-ticket.json'
import {Link} from 'react-router-dom'

const DashBoard = () => {
  return (
    <Container>
        <Row className = "text-center">
            <Col className='mt-5 mb-2'>
                <Link to = '/add-ticket'>
                    <Button variant='info' style={{padding:'10px, 30px', fontSize: '2rem', color:'white', fontWeight:'500'}}>Добавить заявку</Button> 
                </Link>
            </Col>    
        </Row>
        <Row className = "text-center">
            <Col className='mt-5 mb-2'>
               <div>Общие количество заявок: 500</div>
               <div>Заявок в ожидании: 5</div>
            </Col>
        </Row>
        <Row>
            <Col>Недавно добавленные заявки</Col>
        </Row>
        <hr/>
        <Row>
            <Col>
            <TableTicket dataTickets = {dataTickets}/>
            </Col>
        </Row>
    </Container>
  )
}

export default DashBoard