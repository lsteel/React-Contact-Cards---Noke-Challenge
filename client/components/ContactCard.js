import React from 'react'
// Even though we don't use React directly, the process to convert JSX into
// `React.createElement()` calls needs `React` available

const ContactCard = (props) => {
  // var styles = {
  //   textDecoration: props.completed ? 'line-through' : 'none',
  //   cursor: 'pointer'
  // }
  return (
    // <span style={styles} onClick={() => props.onClick()}>{props.name}</span>
    <span>{props.contact.Name}</span>
  )
}

export default ContactCard
