import React from 'react'

const Contact = (props) => {
  var styles = {
    textDecoration: props.completed ? 'line-through' : 'none',
    cursor: 'pointer'
  }
  return (
    <span style={styles} onClick={() => props.onClick()}>{props.name}</span>
  )
};

export default Contact
