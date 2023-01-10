import React, {useEffect} from 'react'
import { Container, Button, Col, Row } from 'react-bootstrap'
import TableTicket from '../../components/table-ticket/TableTicket'
import {useSelector, useDispatch} from "react-redux";
import {Link} from 'react-router-dom'

import {fetchAllticket} from '../../components/ticket-listining/ticketAction'

const DashBoard = () => {
    const dispatch = useDispatch()
    const {tickets} = useSelector(state => state.ticket)

    useEffect(() => {
        if(tickets.length === 0){
            dispatch(fetchAllticket())
        }
    }, [dispatch,tickets])

    const pendingTickets = tickets.filter(item => item.status !== 'Закрыт')
  
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
               <div>Общие количество заявок: {tickets.length}</div>
               <div>Заявок в ожидании: {pendingTickets.length}</div>
            </Col>
        </Row>
        <Row>
            <Col>Недавно добавленные заявки</Col>
        </Row>
        <hr/>
        <Row>
            <Col>
            <TableTicket/>
            </Col>
        </Row>
    </Container>
  )
}

export default DashBoard