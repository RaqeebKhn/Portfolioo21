import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <div>
      <section className='contact-container'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div style={{flex: 1}}>
                <ContactInfoCard
                iconURL='./Images/icons8-mail1-48.png'
                text='mraqeebkhan.mrk@gmail.com'
                />
                <ContactInfoCard
                iconURL='Images/icons8-github1-48.png'
                text='https://github.com/RaqeebKhn/Portfolioo21.git'
                />
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>

      </section>
    </div>
  )
}

export default ContactMe
