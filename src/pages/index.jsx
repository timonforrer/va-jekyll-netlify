import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import Image from 'gatsby-image'
import ReactModal from 'react-modal'

import Layout from '../components/layout'
import Slice from '../components/slices/slice'
// import SEO from '../components/seo'

import ButtonLink from '../components/buttonlink'
import Container from '../components/container'
import Stack from '../components/stack'
// import Picture from '../components/picture'

import styles from './index.module.scss'
import containerStyles from '../components/container.module.scss'
import buttonStyles from '../components/buttonlink.module.scss'
import AspectRatio from '../components/aspectratio';

export const query = graphql`
  {
    prismic {
      home(uid: "home", lang: "de-ch") {
        hero_title
        hero_introduction
        hero_video {
          ... on PRISMIC__FileLink {
            url
          }
        }
        hero_image
        hero_imageSharp {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cta
        cta_content
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
          ... on PRISMIC_HomeBodyLarge_video {
            type
            primary {
              title
              embed
              background_image
              background_imageSharp {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          ... on PRISMIC_HomeBodyUpcoming_shows {
            type
            primary {
              title
            }
          }
        }
      }
    }
  }
`

class Homepage extends React.Component {
  constructor () {
    super()
    this.state = {
      showHeroModal: false
    }

    this.handleHeroModalOpen = this.handleHeroModalOpen.bind(this)
    this.handleHeroModalClose = this.handleHeroModalClose.bind(this)
  }

  handleHeroModalOpen () {
    this.setState({ showHeroModal: true })
  }

  handleHeroModalClose () {
    this.setState({ showHeroModal: false })
  }

  render () {
    const content = this.props.data.prismic.home
    return (
      <Layout>
        <ReactModal
          isOpen={this.state.showHeroModal}
          contentLabel="Voltage Arc Vorstellungsvideo"
          onRequestClose={this.handleHeroModalClose}
          className={[
            containerStyles.container,
            containerStyles.containerCentered
          ].join(' ')}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              padding: 0,
            },
            content: {
              position: 'relative',
              top: '0',
              left: '0',
              right: '0',
              outline: 'none',
              background: 'transparent',
              border: 0,
              borderRadius: 0,
            }
          }}
        >
          <Stack>
            <AspectRatio>
              <div dangerouslySetInnerHTML={{ __html: content.cta_content.html }} />
            </AspectRatio>
            <button
              className={[buttonStyles.buttonlink, 'uppercase'].join(' ')}
              onClick={this.handleHeroModalClose}
            >
              schliessen
            </button>
          </Stack>
        </ReactModal>
        <Stack className={styles.main} extended>
          <section className={styles.heroSection}>
            <div className="pin">
              <Container className={styles.heroSectionText}>
                <Stack dense>
                  {RichText.render(content.hero_title)}
                  <p className="lead">{RichText.asText(content.hero_introduction)}</p>
                  <button className={[buttonStyles.buttonlink, 'uppercase'].join(' ')} onClick={this.handleHeroModalOpen}>{content.cta}</button>
                </Stack>
              </Container>
            </div>
            {
              content.hero_video ?
              <video
                src={content.hero_video.url}
                autoPlay
                poster={content.hero_image.Mobile.url}
                loop
                muted
                width="2560"
                height="1080"
                className={styles.heroSection__video}
              >
                <Image fluid={content.hero_imageSharp.childImageSharp.fluid} />
              </video> :
              <Image fluid={content.hero_imageSharp.childImageSharp.fluid} />
            }
          </section>

          {content.body.map((item, index) => <Slice {...item} key={`slice-${index}`} />)}
        </Stack>
      </Layout>
    )
  }
}

export default Homepage
