import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Container from '../container'
import Heading from '../heading'
import ShowPreview from '../showpreview'
import Stack from '../stack'

export default (props) => (
  <StaticQuery
    query={graphql`
      query UpcomingShowsQuery {
        allAirtable(filter: {table: {eq: "Gigs"}, data: {State: {eq: "fixed"}}}) {
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
    `}
    render={data => {
      const today = new Date().toISOString()

      const upcoming = (element) => {
        return element.node.data.iso_start >= today
      }

      return (
        <>
        {
          data.allAirtable.edges.some(upcoming) ?
          <Container>
            <Stack>
              <Heading>{props.primary.title}</Heading>
              <Stack dense>
                {data.allAirtable.edges.map((item, index) => {
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
          </Container> :
          null
        }
        </>
      )
    }}
  />
)
