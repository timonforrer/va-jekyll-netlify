import React from 'react'

import styles from './picture.module.scss'

const Picture = (props) => {
  const tablet = props.Tablet
  const mobile = props.Mobile

  return (
    <picture className={`${styles.picture} ${props.className ? props.className : ''}`}>
      <source srcSet={props.url} media={`(min-width: ${props.dimensions.width}px)`} />
      <source srcSet={tablet.url} media={`(min-width: ${tablet.dimensions.width}px)`} />
      <img src={mobile.url} alt={props.alt} />
    </picture>
  )
}

export default Picture
