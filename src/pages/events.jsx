import React from 'react'
import { graphql } from 'gatsby'

import Container from '../components/container'
import Heading from '../components/heading'
import ShowPreview from '../components/showpreview'
import Stack from '../components/stack'

import styles from './videos.module.scss'

export const eventsQuery = graphql`
  {
    events: allAirtable(filter: {table: {eq: "Gigs"}, data: {State: {eq: "fixed"}}}) {
      edges {
        node {
          data {
            iso_start: Start
            start: Start(formatString: "DD. MMMM. YYYY", locale: "de")
            name: Name
            venue: Venue {
              data {
                name: Concatenated_Name
                canton: Canton
              }
            }
            slug: Slug
          }
        }
      }
    }
  }
`

const Events =  props => {
  const today = new Date().toISOString()
  const upcoming = (element) => {
    return element.node.data.iso_start >= today
  }

  const events = props.data.events.edges

  return (
    <Container className={styles.wrapper}>
      <Stack extended>
        <h1>Events</h1>
        <Stack>
          <Heading>Bevorstehende Konzerte</Heading>
          <Stack dense>
            {events.map((item, index) => {
              const content = item.node.data
              return (
                <>
                {
                  content.iso_start >= today ?
                  <ShowPreview  key={`show-${index}`} {...content} /> :
                  null
                }
                </>
              )
            })}
          </Stack>
        </Stack>

        <Stack>
          <Heading>Vergangene Konzerte</Heading>
          <Stack dense>
            {events.map((item, index) => {
              const content = item.node.data
              return (
                <>
                {
                  content.iso_start <= today ?
                  <ShowPreview  key={`show-${index}`} {...content} /> :
                  null
                }
                </>
              )
            })}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Events
