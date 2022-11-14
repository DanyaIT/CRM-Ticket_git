import React from 'react'
import { Form, Row,Col } from 'react-bootstrap'

const SearchTicket = ({searchStr, handleOnChange}) => {
  return (
    <div>
        <Form>
            <Form.Group as = {Row}>
                <Form.Label column sm = '2'>Search:{''}</Form.Label>
                <Col sm = '10'>
                    <Form.Control
                    value={searchStr}
                    onChange = {handleOnChange}
                    name = 'searchTicket'
                    placeholder = "Search..."
                    />
                </Col>
            </Form.Group>
        </Form>
    </div>
  )
}

export default SearchTicket