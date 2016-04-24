import React from 'react'
import styles from '../ContactList/ContactList.css'
import Contact from '../Contact/Contact' // Import our Contact component that we just wrote.

const ContactList = (props) => {
  var otherStyles = {
    height: props.state.menuActive || window.innerWidth >= 1024 ? 'auto' : '0px'
  }
  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>
        <span className={['flaticon-circle']}></span>
        Contacts
      </h1>
      <ul
        style={otherStyles}
        className={styles.contactList}
      >
        {
          props.contacts.map((contact, index) => {
            return (
              <li
                className={styles.listItem}
                key={index}
              >
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
