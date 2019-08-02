import React from 'react'

import styles from './grid.module.scss'

const Grid = (props) => {
  return (
    <div className={
      `${
        props.dense ? styles.fukolGridDense :
        props.extended ? styles.fukolGridExtended : ''
      } ${styles.fukolGrid}`
    }>
      {props.children}
    </div>
  )
}

export default Grid
