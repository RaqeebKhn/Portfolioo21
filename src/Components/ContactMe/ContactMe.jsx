import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'

const ContactMe = () => {
  return (
    <div>
      <section className='contact-container'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div style={{flex: 1}}>
                <ContactInfoCard
                iconURL='./Images/icon1.svg'
                text='khan.raqeeb2231997@gmail.com'
                />
            </div>
            <div style={{flex: 1}}></div>
        </div>

      </section>
    </div>
  )
}

export default ContactMe
