import React from 'react'
import Contact from './Contact' // Import our Contact component that we just wrote.

const ContactList = (props) => {
  return (
    <ul>
      {
        props.contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact
                Name={contact.Name}
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
