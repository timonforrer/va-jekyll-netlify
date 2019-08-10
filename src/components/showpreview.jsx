import React from 'react'
import { Link } from 'gatsby'

import ButtonLink from './buttonlink'
import Stack from './stack'

import styles from './showpreview.module.scss'

const ShowPreview = props => (
  <div>
    <div className={styles.wrapper}>
      <Stack denser>
        <p>{props.start}</p>
        <Link to={`/${props.slug}`}><h3>{props.name}</h3></Link>
        <p className="uppercase">{props.venue[0].data.name}, {props.venue[0].data.canton}</p>
      </Stack>
      <div>
        <ButtonLink to={`/${props.slug}`}>Mehr erfahren</ButtonLink>
      </div>
    </div>
  </div>
)

export default ShowPreview
