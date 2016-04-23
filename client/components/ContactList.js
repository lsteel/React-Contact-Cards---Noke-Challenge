import React from 'react'
import Contact from './Contact' // Import our Contact component that we just wrote.

const ContactList = (props) => {
  return (
    <ul>
      {
        props.contacts.map((contact, index) => {
          return (
            <li key={index}>
              <Contact
                name={contact.Name}
                onClick={() => props.onContactClick(contact)}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

export default ContactList
