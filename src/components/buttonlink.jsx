import React from 'react'
import { Link } from 'gatsby'

import Flash from '../components/icons/flash'
import FlashAlt from '../components/icons/flashalt'
import styles from './buttonlink.module.scss'

class ButtonLink extends React.Component {
  components = {
    flash: Flash,
    flashalt: FlashAlt
  }
  render () {
    const props = this.props
    const Icon = this.components[this.props.icon || 'flash']
    const external = props.to.startsWith('http://') || props.to.startsWith('https://')
    const Tag = external ? 'a' : Link

    return (
      <Tag
        to={!external ? props.to : null}
        href={external ? props.to: null}
        className={[
          'uppercase',
          styles.buttonlink,
          props.inverted ? styles.buttonlinkInverted : ''
        ].join(' ')}>
          {props.children}
          {props.icon && <Icon size={24} dark={props.inverted ? null : true} />}
      </Tag>
    )
  }
}


export default ButtonLink
