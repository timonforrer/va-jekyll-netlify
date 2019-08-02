import React from 'react'
// import { Link, graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import Layout from '../components/layout'
import Slice from '../components/slices/slice'
import SEO from '../components/seo'

import Container from '../components/container'
import Stack from '../components/stack'
import Picture from '../components/picture'

import styles from './index.module.scss'

export const query = graphql`
  {
    prismic {
      home(uid: "home", lang: "de-ch") {
        hero_title
        hero_introduction
        hero_video {
          _linkType
        }
        hero_image
        body {
          ... on PRISMIC_HomeBodyFeatured_music {
            type
            label
            primary {
              link {
                _linkType
                ... on PRISMIC_Music {
                  title
                  type
                  cover_photo
                  _meta {
                    uid
                  }
                }
              }
            }
          }
          ... on PRISMIC_HomeBodyMusicians {
            type
            label
            primary {
              title
            }
            fields {
              musician_image
              musician_name
              musician_function
            }
          }
          ... on PRISMIC_HomeBodyVideo_w__description {
            type
            label
            primary {
              description
              title
              youtube_id
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  const content = data.prismic.home
  // const main = data.prismic.allHomes.edges.slice(0,1).pop()
  // const posts = data.prismic.allPosts.edges
  if (!content) return null

  return (
  <Layout>
    <SEO title='Home' />
    <Stack className={styles.main} extended>
      <section className={styles.heroSection}>
        <Container className={styles.heroSectionText}>
          <Stack dense>
            {RichText.render(content.hero_title)}
            <p className="lead">{RichText.asText(content.hero_introduction)}</p>
          </Stack>
        </Container>
        <Picture className="pin" {...content.hero_image} />
      </section>

      {content.body.map((item, index) => <Slice {...item} key={`slice-${index}`} />)}
    </Stack>
  </Layout>
  )
}
