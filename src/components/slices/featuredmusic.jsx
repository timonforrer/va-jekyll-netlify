import React from 'react'
import { RichText } from 'prismic-reactjs'

const FeaturedMusic = (props) => {
  let data = props.primary.link
  return (
    <div>
      <h2>{RichText.asText(data.title)}</h2>
    </div>
  )
}

export default FeaturedMusic
