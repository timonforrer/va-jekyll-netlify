import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import Container from '../container'
import Heading from '../heading'
import Stack from '../stack';

export default (props) => (
  <StaticQuery
    query={graphql`
      query UpcomingShowsQuery {
        gigs: allAirtable(filter: {table: {eq: "Gigs"}, data: {State: {eq: "fixed"}}}) {
          edges {
            node {
              data {
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
    render={data => (
      <Container>
        <Stack>
          <Heading>{props.primary.title}</Heading>
          <Stack dense>
            {data.gigs.edges.map((item, index) => {
              const content = item.node.data
              console.log(content.venue)
              return (
                <div key={`show-${index}`}>
                  <p>{content.start}</p>
                  <Link to={`/${content.slug}`}><h3>{content.name}</h3></Link>
                  <p className="uppercase">{content.venue[0].data.name}, {content.venue[0].data.canton}</p>
                </div>
              )
            })}
          </Stack>
        </Stack>
      </Container>
    )}
  />
)
