import React from 'react'

import styles from './grid.module.scss'

const Grid = (props) => {
  return (
    <div>
      <div className={[
        props.dense ? styles.fukolGridDense :
        props.extended ? styles.fukolGridExtended : '',
        props.reverse ? styles.fukolGridReverse : '',
        styles.fukolGrid
      ].join(' ')}>
        {props.children}
      </div>
    </div>
  )
}

export default Grid
