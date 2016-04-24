import React from 'react'
import styles from './MenuIcon.css'
// Even though we don't use React directly, the process to convert JSX into
// `React.createElement()` calls needs `React` available

const MenuIcon = (props) => {
  return (
    // <span style={styles} onClick={() => props.onClick()}>{props.name}</span>
    <button
      className={styles.menuIcon}
      onClick={() => props.onMenuClick(props.state)}
    >
      <span className={['flaticon-bars']}></span>
    </button>
  )
}

export default MenuIcon
