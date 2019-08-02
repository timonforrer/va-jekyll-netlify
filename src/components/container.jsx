import React from 'react'

import styles from './container.module.scss'

const Container = (props) => {
  const Tag = props.tag || 'div'
  return (
    <Tag
      className={[
        styles.container,
        props.dense ? styles.containerDense : '',
        props.className ? props.className : ''
      ].join(' ')}
    >
      {props.children}
    </Tag>
  )
}

export default Container
