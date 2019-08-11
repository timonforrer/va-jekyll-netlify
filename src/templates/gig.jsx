import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import Layout from '../components/layout'

import styles from './gig.module.scss'
import wrapperStyles from '../pages/videos.module.scss'

import AspectRatio from '../components/aspectratio'
import Container from '../components/container'
import Stack from '../components/stack'
import ButtonLink from '../components/buttonlink'

const Gig = ({data}) => {
  const at = data.airtable.data
  const pm = data.prismic.allGigs.edges.length !== 0 ? data.prismic.allGigs.edges[0].node.body : null
  return (
    <Layout className={wrapperStyles.wrapper}>
      <Container dense>
        <Stack extended>
          <h1>{at.name}</h1>
          {
            pm &&
            <Stack>
              {
                pm.map((section, index) => {
                  switch (section.type) {
                    case ('rich_text'):
                      return <Stack key={index}>{RichText.render(section.primary.content)}</Stack>
                    case ('embed'):
                      return (
                        <div key={index} className={styles.fullWidth}>
                          <AspectRatio>
                            <div dangerouslySetInnerHTML={{ __html: section.primary.url.html }} />
                          </AspectRatio>
                        </div>
                      )
                    case ('photo'):
                      return (
                        <div key={index}>
                          <Image alt={section.primary.image.alt} fluid={section.primary.imageSharp.childImageSharp.fluid} />
                        </div>
                      )
                  }
                  return null
                })
              }
            </Stack>
          }
          <ButtonLink to="/">Nach «hause»</ButtonLink>
        </Stack>
      </Container>
    </Layout>
  )
}

export default Gig

export const airtableGigQuery = graphql`
  query($slug: String!) {
    airtable(data: {Slug: {eq: $slug}}) {
      data {
        name: Name
        Venue {
          data {
            name: Name
            zip: ZIP
            city: City
            canton: Canton
            country: Country
          }
        }
        date: Start(formatString: "DD. MMMM YYYY", locale: "ch-de")
        doors_time: Doors(formatString: "HH:mm")
        start_time: Start(formatString: "HH:mm")
        g_start_date: Doors(formatString: "YYYY-MM-DDTHH:mm")
        g_end_date: End(formatString: "YYYY-MM-DDTHH:mm")
        price: Price
      }
    }
    prismic {
      allGigs(uid: $slug) {
        edges {
          node {
            body {
              ... on PRISMIC_GigBodyRich_text {
                type
                primary {
                  content
                }
              }
              ... on PRISMIC_GigBodyPhoto {
                type
                primary {
                  image
                  imageSharp {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
              ... on PRISMIC_GigBodyEmbed {
                type
                primary {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

