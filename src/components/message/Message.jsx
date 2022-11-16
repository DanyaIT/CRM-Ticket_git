import React from 'react'
import { useState } from 'react'
import '.././message/message.css'

const Message = ({message}) => {

  return (
    <div className='messages'>
        {message.map((row,i)=>(
            <div key = {i} className='message__history'>
                <div className='send__message'>
                    <div className='sender'>{row.messageBy}</div>
                    <div className='date__message'>{row.date}</div>
                </div>
                <div className='message'>{row.message}</div>
            </div>
            ))}
    </div>
  )
}

export default Message