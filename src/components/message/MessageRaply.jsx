import React from 'react'
import { Form, Button } from 'react-bootstrap'

const MessageRaply = ({handleOnChange,replymessage}) => {
  return (
    <Form>
        <Form.Text>Опишите свой ответ или обновите запрос</Form.Text>
        <Form.Group>
            <Form.Control
            onChange={handleOnChange}
            as = 'textarea'
            value = {replymessage}
            rows={5}
            />
        </Form.Group>
        <div className='text-end mt-3 mb-3'>
            <Button 
            block
            variant='info' 
            type='submit'
            >
            Ответить</Button>
        </div>
    </Form>
  )
}

export default MessageRaply