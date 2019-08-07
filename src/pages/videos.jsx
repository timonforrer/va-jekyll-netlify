import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import ButtonLink from '../components/buttonlink'
import Container from '../components/container'
import Stack from '../components/stack'
import Video from '../components/video'

import styles from './videos.module.scss'

export const videoQuery = graphql`
{
  allYoutubeVideo {
    edges {
      node {
        title
        videoId
        thumbnail {
          url
        }
        localThumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`

const VideoPage = ({ data }) => {
  const videos = data.allYoutubeVideo.edges
  return (
    <Layout className={styles.wrapper}>
      <Container>
        <Stack extended>
          <h1>Videos</h1>
          {
            videos.map((item, index) => {
              const video = item.node
              return (
                <Stack key={index} dense>
                  <h2 className="as-h3">{video.title}</h2>
                  <Video fluid={video.localThumbnail.childImageSharp.fluid} ytid={video.videoId} />
                </Stack>
              )
            })
          }
          <ButtonLink to="/">Nach «Hause»</ButtonLink>
        </Stack>
      </Container>
    </Layout>
  )
}

export default VideoPage
