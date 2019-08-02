import React from 'react'
// import { Link, graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import Layout from '../components/layout'
import Slice from '../components/slices/slice'
import SEO from '../components/seo'

import './index.module.scss'

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
    <section>
      {RichText.render(content.hero_title)}
      {RichText.render(content.hero_introduction)}
    </section>

    {content.body.map((item, index) => <Slice {...item} key={`slice-${index}`} />)}
  </Layout>
  )
}
