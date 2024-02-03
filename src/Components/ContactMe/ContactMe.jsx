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
                iconURL='./Images/icons8-mail1-48.png'
                text='khan.raqeeb2231997@gmail.com'
                />
                <ContactInfoCard
                iconURL='Images/icons8-github1-48.png'
                text='https://github.com/RaqeebKhn/Portfolioo21.git'
                />
            </div>
            <div style={{flex: 1}}></div>
        </div>

      </section>
    </div>
  )
}

export default ContactMe
