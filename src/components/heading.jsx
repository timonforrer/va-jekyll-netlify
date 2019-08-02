import React from 'react'

import styles from './heading.module.scss'

const Heading = (props) => {
  return (
    <div className={styles.heading}>
      <span className={styles.heading__theLetter}>{props.children.charAt(0)}</span>
      <h2>{props.children}</h2>
    </div>
  )
}

export default Heading
