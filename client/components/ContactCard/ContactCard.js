import React from 'react'
import styles from './ContactCard.css'
// Even though we don't use React directly, the process to convert JSX into
// `React.createElement()` calls needs `React` available

const ContactCard = (props) => {
  var hidden = {
    visibility: props.contact.Name === undefined ? 'hidden' : 'visible'
  }
  var absIcon = {
    position: 'absolute',
    left: '0px',
    top: '0px'
  }
  return (
    // <span style={styles} onClick={() => props.onClick()}>{props.name}</span>
    <div style={hidden} className={styles.cardContainer}>
      <div className={styles.cardPhotoWrapper}>
        <img src={props.contact.Picture} />
      </div>
      <div className={styles.cardInfoWrapper}>
        <h2 className={styles.name}>
          {props.contact.Name}
        </h2>
        <h3 className={styles.title}>
          "{props.contact.Title}"
        </h3>
        <p className={styles.phone}>
          <a href={"tel:" + props.contact.Phone}>
            <span className={['flaticon-technology']}></span>
            &nbsp;{props.contact.Phone}
          </a>
        </p>
        <p className={styles.email}>
          <a href={"mailto:" + props.contact.Email}>
            <span className={['flaticon-envelope']}></span>
            &nbsp;{props.contact.Email}
          </a>
        </p>
        <p className={styles.address}>
          <span style={absIcon} className={['flaticon-gps']}></span>
          <span className={styles.leftMargin}>{props.contact.Street}</span>
          <br/>
          <span className={styles.leftMargin}>{props.contact.City}, {props.contact.State}</span>
          <br/>
          <span className={styles.leftMargin}>{props.contact.Zipcode}</span>
        </p>
        <p className={styles.birthday}>
          <span className={['flaticon-food']}></span>
          &nbsp;{props.contact.Birthday}
        </p>
      </div>
    </div>
  )
}

export default ContactCard
