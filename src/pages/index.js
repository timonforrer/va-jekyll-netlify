import React from "react"
import { Link, graphql } from "gatsby"
import { RichText } from 'prismic-reactjs'

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    prismic {
      allHomes(lang: "de-ch") {
        edges {
          node {
            hero_description
            hero_title
            hero_video {
              ... on PRISMIC__FileLink {
                _linkType
                url
              }
            }
            _meta {
              lang
            }
          }
        }
      }
      allPosts(lang: "de-ch") {
        totalCount
        edges {
          node {
            _meta {
              uid
            }
            hero_title
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  const main = data.prismic.allHomes.edges.slice(0,1).pop()
  const posts = data.prismic.allPosts.edges
  if (!main && !posts) return null

  const mainCnt = main.node
  return (
  <Layout>
    <SEO title="Home" />
    {RichText.render(mainCnt.hero_title)}
    {RichText.render(mainCnt.hero_description)}
    <video autoPlay>
      <source src={mainCnt.hero_video.url} type="video/mp4"/>
    </video>
    <ul>
      {posts.map(post => <li><Link to={`/news/${post.node._meta.uid}`}>{RichText.asText(post.node.hero_title)}</Link></li>)}
    </ul>
  </Layout>
  )
}