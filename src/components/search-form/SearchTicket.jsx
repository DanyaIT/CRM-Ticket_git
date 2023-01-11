import React from 'react'
import { Form, Row,Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {filterTickets} from '../ticket-listining/ticketAction'


const SearchTicket = () => {
    const dispatch = useDispatch()
    const handleOnChange = (e) => {
      const {value} = e.target
      dispatch(filterTickets(value))
    }

  return (
    <div>
        <Form>
            <Form.Group as = {Row}>
                <Form.Label column sm = '2'>Поиск:{''}</Form.Label>
                <Col sm = '10'>
                    <Form.Control
                    onChange = {handleOnChange}
                    placeholder = "Укажите тему заявки..."
                    />
                </Col>
            </Form.Group>
        </Form>
    </div>
  )
}

export default SearchTicket