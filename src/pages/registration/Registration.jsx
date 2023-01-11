import React from 'react'
import './registration.css'
import RegistrationForm from '../../components/registrationForm/RegistrationForm'

const Registration = () => {
  return (
    <div className="registration-page bg-info">
        <div className="registration-page__form">
            <RegistrationForm/>
        </div>
    </div>
  )
}

export default Registration