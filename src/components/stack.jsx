import React from 'react'

import styles from "./stack.module.scss"

const Stack = (props) => {
  const Tag = props.tag || 'div'
  return (
    <Tag className={[
        props.dense ? styles.stackDense : 
        props.extended ? styles.stackExtended : 
        styles.stackRegular,
        props.className ? props.className : ''
      ].join(' ')}
    >
      {props.children}
    </Tag>)
}

export default Stack
