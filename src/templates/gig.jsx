import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import Layout from '../components/layout'

import styles from './gig.module.scss'
import wrapperStyles from '../pages/videos.module.scss'

import AspectRatio from '../components/aspectratio'
import ButtonLink from '../components/buttonlink'
import Container from '../components/container'
import Grid from '../components/grid'
import Stack from '../components/stack'

const Gig = ({data}) => {
  const at = data.airtable.data
  const venue = at.venue[0].data
  const pm = data.prismic.allGigs.edges.length !== 0 ? data.prismic.allGigs.edges[0].node.body : null
  const today = new Date().toISOString()

  const mapsSource = `${venue.address}%20${venue.zip}%20${venue.city}`
  const mapsQuery = mapsSource.replace(' ', '%20')

  return (
    <Layout className={wrapperStyles.wrapper}>
      <Stack extended>
        <Container dense>
          <Stack>
            <h2>{at.date}</h2>
            <h1>{at.name}</h1>
            <Grid>
              <div className={styles.secondaryInfo}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM13 11.59L15.54 14.12C15.7283 14.3083 15.8341 14.5637 15.8341 14.83C15.8341 15.0963 15.7283 15.3517 15.54 15.54C15.3517 15.7283 15.0963 15.8341 14.83 15.8341C14.5637 15.8341 14.3083 15.7283 14.12 15.54L11.3 12.7C11.1116 12.5154 11.0038 12.2638 11 12V8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8V11.59Z" fill="#FAFAFA"/>
                </svg>
                <span className="lead">
                  {at.doors_time} Uhr Türöffnung <br/>
                  {at.start_time} Uhr Beginn
                </span>
              </div>
              <div className={styles.secondaryInfo}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.64 16.36C4.38021 15.1018 3.52193 13.4981 3.17376 11.752C2.82558 10.0059 3.00316 8.19569 3.68402 6.5505C4.36488 4.90531 5.51842 3.49904 6.99871 2.50962C8.47899 1.52019 10.2195 0.992065 12 0.992065C13.7805 0.992065 15.521 1.52019 17.0013 2.50962C18.4816 3.49904 19.6351 4.90531 20.316 6.5505C20.9968 8.19569 21.1744 10.0059 20.8263 11.752C20.4781 13.4981 19.6198 15.1018 18.36 16.36L12.71 22.02C12.617 22.1137 12.5064 22.1881 12.3846 22.2389C12.2627 22.2896 12.132 22.3158 12 22.3158C11.868 22.3158 11.7373 22.2896 11.6154 22.2389C11.4936 22.1881 11.383 22.1137 11.29 22.02L5.64 16.36ZM16.95 14.95C17.9289 13.971 18.5955 12.7237 18.8656 11.3659C19.1356 10.008 18.9969 8.60058 18.4671 7.32154C17.9373 6.0425 17.04 4.94929 15.8889 4.18015C14.7378 3.41101 13.3844 3.00049 12 3.00049C10.6156 3.00049 9.26222 3.41101 8.11109 4.18015C6.95996 4.94929 6.06275 6.0425 5.53292 7.32154C5.00308 8.60058 4.86442 10.008 5.13445 11.3659C5.40449 12.7237 6.07111 13.971 7.05 14.95L12 19.9L16.95 14.95ZM12 14C10.9391 14 9.92172 13.5786 9.17158 12.8284C8.42143 12.0783 8 11.0609 8 9.99998C8 8.93912 8.42143 7.9217 9.17158 7.17156C9.92172 6.42141 10.9391 5.99999 12 5.99999C13.0609 5.99999 14.0783 6.42141 14.8284 7.17156C15.5786 7.9217 16 8.93912 16 9.99998C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14ZM12 12C12.5304 12 13.0391 11.7893 13.4142 11.4142C13.7893 11.0391 14 10.5304 14 9.99998C14 9.46955 13.7893 8.96084 13.4142 8.58577C13.0391 8.2107 12.5304 7.99999 12 7.99999C11.4696 7.99999 10.9609 8.2107 10.5858 8.58577C10.2107 8.96084 10 9.46955 10 9.99998C10 10.5304 10.2107 11.0391 10.5858 11.4142C10.9609 11.7893 11.4696 12 12 12Z" fill="#FAFAFA"/>
                </svg>
                <span className="lead">
                  {venue.name}<br />
                  {venue.address}, {venue.zip} {venue.city} {venue.canton}<br />
                  { venue.country !== 'CH' ? <>{venue.country}<br /></> : null }
                  <a className="underlined lead" href="#directions">Wegbeschreibung</a>
                </span>
              </div>
            </Grid>
          </Stack>
        </Container>
        <section className={styles.priceSection}>
          <Container dense>
            <Grid>
              <Stack dense>
                <div>
                  <span className="uppercase">Vorverkauf</span><br />
                  <strong className="as-h3">CHF {at.price}</strong>
                </div>
                {
                  at.g_start_date >= today && at.ticket_url ?
                  <ButtonLink icon={'flashalt'} to={at.ticket_url}>Ticket kaufen</ButtonLink> :
                  null
                }
              </Stack>
              {
                at.box_office_price &&
                <div>
                  <span className="uppercase">Abendkasse</span><br />
                  <strong className="as-h3">CHF {at.box_office_price}</strong>
                </div>
              }
            </Grid>
          </Container>
        </section>
        <Stack>
          <Container dense>
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
          </Container>
        </Stack>
        <iframe
          id="directions"
          title="maps"
          width="100%"
          height="400"
          src={`https://maps.google.com/maps?width=100%&height=265&hl=en&q=${mapsQuery}+()&ie=UTF8&t=&z=14&iwloc=B&output=embed`}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0">
          <a href="https://www.maps.ie/map-my-route/">Karte</a>
        </iframe>
      </Stack>
    </Layout>
  )
}

export default Gig

export const airtableGigQuery = graphql`
  query($slug: String!) {
    airtable(data: {Slug: {eq: $slug}}) {
      data {
        name: Name
        venue: Venue {
          data {
            name: Name
            address: Address
            zip: ZIP
            city: City
            canton: Canton
            country: Country
          }
        }
        date: Start(formatString: "DD. MMMM YYYY", locale: "de")
        doors_time: Doors(formatString: "HH:mm")
        start_time: Start(formatString: "HH:mm")
        g_start_date: Doors(formatString: "YYYY-MM-DDTHH:mm")
        g_end_date: End(formatString: "YYYY-MM-DDTHH:mm")
        price: Price
        box_office_price: Box_Office
        ticket_url: Ticket_URL
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

