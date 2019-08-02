import React from 'react'
import {RichText} from 'prismic-reactjs'

import Container from '../container'
import Grid from '../grid'
import Stack from '../stack'
import Video from '../video'

const VideoDescription = (props) => {
  const data = props.primary
  const reverse = props.label === 'video-left' ? true : false
  return (
    <Container>
      <Stack>
        <h2>{data.title}</h2>
        <Grid reverse={reverse}>
          {RichText.render(data.description)}
          <Video ytid={data.youtube_id} />
        </Grid>
      </Stack>
    </Container>
  )
}

export default VideoDescription
