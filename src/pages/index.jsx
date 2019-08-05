import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import Image from 'gatsby-image'

// import Layout from '../components/layout'
import Slice from '../components/slices/slice'
// import SEO from '../components/seo'

import ButtonLink from '../components/buttonlink'
import Container from '../components/container'
import Stack from '../components/stack'
// import Picture from '../components/picture'

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
        hero_imageSharp {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
                  cover_photoSharp {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
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
              musician_imageSharp {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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

const Homepage = props => {
  const content = props.data.prismic.home
  return (
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
        <Image fluid={content.hero_imageSharp.childImageSharp.fluid} />
        {/* <Picture {...content.hero_image} className={styles.heroSection__image} /> */}
      </section>

      {content.body.map((item, index) => <Slice {...item} key={`slice-${index}`} />)}
    </Stack>
  )
}

export default Homepage
