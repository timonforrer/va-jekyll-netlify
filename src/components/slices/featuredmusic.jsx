import React from 'react'
import { RichText } from 'prismic-reactjs'

import Container from '../container'

const FeaturedMusic = (props) => {
  let data = props.primary.link
  return (
    <Container>
      <h2>{RichText.asText(data.title)}</h2>
    </Container>
  )
}

export default FeaturedMusic
