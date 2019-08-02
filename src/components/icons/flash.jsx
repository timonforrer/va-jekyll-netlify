import React from 'react'

import styles from './icon.module.scss'

const Flash = (props) => {
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
      <path d="M16 14L19 1L10 20L16 18L13 31L22 12L16 14Z" />
    </svg>
  )
}

export default Flash
