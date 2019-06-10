import React from 'react'
import { RichText } from 'prismic-reactjs'
import linkResolver from '../utils/linkResolver'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export const query = graphql`
query BlogPostQuery($uid: String) {
  prismic {
    allPosts(uid: $uid) {
      edges {
        node {
          _meta {
            uid
            id
          }
          hero_description
          hero_title
        }
      }
    }
  }
}
`

const RenderBody = ({ blogPost }) => (
  <React.Fragment>
    {RichText.render(blogPost.hero_title)}
    {RichText.render(blogPost.hero_description)}
  </React.Fragment>
)

const BlogPost = props => {
  const doc = props.data.prismic.allPosts.edges.slice(0,1).pop()
  if(!doc) return null

  return(
    <Layout>
      <RenderBody blogPost={doc.node} />
    </Layout>
  )
}

export default BlogPost
