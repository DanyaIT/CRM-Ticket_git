import React, {useState} from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {replyOnTicket} from '../ticket-listining/ticketAction'


const MessageRaply = ({ticketId}) => {
  const [message, setMessage] = useState('')
  const {user:{name}} = useSelector(state => state.user)
  const {replyMessage, selectedTicket} = useSelector(state => state.ticket)
  const dispatch = useDispatch()
  const handleOnChange = (e)=>{
    const {value} = e.target
    setMessage(value) 
  }
  
  const handleOnSubmit = (e) => {
    e.preventDefault()
   const messageObj = {
      sender: name,
      message
   }
   dispatch(replyOnTicket(ticketId, messageObj))
   setMessage('')
  }


  return (
    <Form>
        <Form.Text>Опишите свой ответ или обновите запрос</Form.Text>
        <Form.Group>
            <Form.Control
            onChange={handleOnChange}
            as = 'textarea'
            value = {message}
            rows={5}
            />
        </Form.Group>
        <div className='text-end mt-3 mb-3'>
            <Button 
            onClick={handleOnSubmit}
            variant='info' 
            type='submit'
            disabled = {selectedTicket.status === 'Закрыт'}
            >
            Ответить</Button>
        </div>
    </Form>
  )
}

export default MessageRaply