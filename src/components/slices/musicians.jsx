import React from 'react'

import Container from '../container'
import Grid from '../grid'
import Stack from '../stack'
import Flash from '../icons/flash'

import styles from './musicians.module.scss'

const Musicians = (props) => {
  const musicians = props.fields
  const title = props.primary.title
  return (
    <Container>
      <Stack>
        <h2>{title}</h2>
        <Grid dense>
          {musicians.map((m, index) => (
            <div key={index}>
              <img src={m.musician_image.url} alt={m.musician_image.alt} />
              <div className={styles.musicianInfo}>
                <h3>{m.musician_name}</h3>
                <p className="uppercase"><Flash size={24} />{m.musician_function}</p>
              </div>
            </div>
          ))}
        </Grid>
      </Stack>
    </Container>
  )
}

export default Musicians
