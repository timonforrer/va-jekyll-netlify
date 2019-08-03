import React from 'react'
import { useInView } from 'react-intersection-observer'

import styles from './picture.module.scss'

const Picture = (props) => {
  const tablet = props.Tablet
  const mobile = props.Mobile
  const blur = props.Blur !== undefined ? props.Blur : false

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  })

  return (
    <div ref={ref} className={`${styles.pictureWrapper} ${props.className ? props.className : ''}`}>
      {inView && (
        <picture className={`${styles.picture} pin`}>
          <source srcSet={props.url} media={`(min-width: ${props.dimensions.width}px)`} />
          <source srcSet={tablet.url} media={`(min-width: ${tablet.dimensions.width}px)`} />
          <img src={mobile.url} alt={props.alt} />
        </picture>
      )}
      <div
        className={styles.picture__placeholder}
        style={{
          paddingTop: `${props.dimensions.height / props.dimensions.width * 100}%`,
          backgroundImage: `url('${blur ? blur.url : `https://source.unsplash.com/random/${Math.round(props.dimensions.width / 100)}x${Math.round(props.dimensions.width / 100)}`}')`
        }}
      >
      </div>
    </div>
  )
}

export default Picture
