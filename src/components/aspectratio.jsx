import React from 'react'

import styles from './aspectratio.module.scss'

const AspectRatio = (props) => {
  const width = props.width !== undefined ? props.width : 16
  const height = props.height !== undefined ? props.height : 9
  const topPad = Math.round( height / width * 100 )

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
        style={{ paddingTop: `${topPad}%`}}>
          {props.children}
      </div>
    </div>
  )
}

export default AspectRatio