import React from 'react'

import styles from './icon.module.scss'

const FlashAlt = (props) => {
  const size = props.size || 32
  return (
    <svg
      className={`${styles.icon} ${props.dark ? styles.iconDark : ''}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 16H3L18 18L17 16H29L14 14L15 16Z" fill="#0E0E0E"/>
      <path d="M26 18L29 16L26 14L27 16L26 18Z" fill="#0E0E0E"/>
    </svg>
  )
}

export default FlashAlt
