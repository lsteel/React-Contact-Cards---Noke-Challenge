import React from 'react'
import styles from './ContactList.css'
import Contact from './Contact' // Import our Contact component that we just wrote.

const ContactList = (props) => {
  return (
    <div>
      <h1 className={styles.heading}>Contacts</h1>
      <ul className={styles.contactList}>
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
    </div>
  )
}

export default ContactList
