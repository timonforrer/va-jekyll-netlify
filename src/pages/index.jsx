import React from 'react'
// import { Link, graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import Layout from '../components/layout'
import Slice from '../components/slices/slice'
import SEO from '../components/seo'

import ButtonLink from '../components/buttonlink'
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
                  spotify_embed
                  providers {
                    link {
                      ... on PRISMIC__ExternalLink {
                        _linkType
                        url
                      }
                    }
                    provider_name
                  }
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
        <div className="pin">
          <Container className={styles.heroSectionText}>
            <Stack dense>
              {RichText.render(content.hero_title)}
              <p className="lead">{RichText.asText(content.hero_introduction)}</p>
              <ButtonLink to="http://about" icon="flash">hallo</ButtonLink>
            </Stack>
          </Container>
        </div>
        <Picture {...content.hero_image} className={styles.heroSection__image} />
      </section>

      {content.body.map((item, index) => <Slice {...item} key={`slice-${index}`} />)}
    </Stack>
  </Layout>
  )
}
