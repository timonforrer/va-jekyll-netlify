// import React from 'react'
// import { RichText } from 'prismic-reactjs'
// // import linkResolver from '../utils/linkResolver'
// import { graphql } from 'gatsby'

// import Layout from '../components/layout'

// export const query = graphql`
// query BlogPostQuery($uid: String) {
//   prismic {
//     allPosts(uid: $uid) {
//       edges {
//         node {
//           post_title
//           intro_text
//           body {
//             ... on PRISMIC_PostBodyText {
//               type
//               primary {
//                 text_section_title
//                 text
//               }
//             }
//             ... on PRISMIC_PostBodyQuote {
//               type
//               label
//               primary {
//                 author
//                 quote
//               }
//             }
//             ... on PRISMIC_PostBodyImage_with_caption {
//               type
//               fields {
//                 caption
//                 illustration
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `

// const RenderBody = ({ blogPost }) => (
//   <React.Fragment>
//     <div className="container">
//       {RichText.render(blogPost.post_title)}
//       {RichText.render(blogPost.intro_text)}
//     </div>
//     {
//       blogPost.body.map((slice, index) => {
//         switch (slice.type) {
//           case ('text'):
//             return (
//               <div className="container" key={`slice-${index}`}>
//                 {RichText.render(slice.primary.text_section_title)}
//                 {RichText.render(slice.primary.text)}
//               </div>
//             )
//           case ('quote'):
//             return (
//               <div className="container">
//                 <strong>{RichText.asText(slice.primary.quote)}</strong><br/>
//                 &ndash;&nbsp;{slice.primary.author}
//               </div>
//             )
//           case ('image_with_caption'):
//             return (
//               <div className="container">
//                 {slice.fields.map((image, index) => {
//                   return (
//                     <div key={index}>
//                       {RichText.render(image.caption)}
//                       <img src={image.illustration.url} alt={image.caption}/>
//                     </div>
//                   )
//                 })}
//               </div>
//             )
//         }
//       })
//     }
//   </React.Fragment>
// )

// const BlogPost = props => {
//   const doc = props.data.prismic.allPosts.edges.slice(0,1).pop()
//   if(!doc) return null

//   return(
//     <Layout>
//       <RenderBody blogPost={doc.node} />
//     </Layout>
//   )
// }

// export default BlogPost
