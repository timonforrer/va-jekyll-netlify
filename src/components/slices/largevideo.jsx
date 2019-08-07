import React from 'react';
import Image from 'gatsby-image'

import styles from './largevideo.module.scss'
import buttonStyles from '../buttonlink.module.scss'

import AspectRatio from '../aspectratio'
import Container from '../container'
import Stack from '../stack'

class LargeVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  showIframe = () => this.setState({ show: true })
  hideIframe = () => this.setState({ show: false })
  
  render () {
    const image = this.props.primary.background_imageSharp.childImageSharp.fluid
    const content = this.props.primary
    return (
      <section className={styles.videoSection}>

      {
        this.state.show && 
        <div onClick={(e) => this.hideIframe()} className={styles.videoSection__modal}>
          <Container>
            <AspectRatio>
              <div dangerouslySetInnerHTML={{ __html: content.embed.html }} />
            </AspectRatio>
          </Container>
        </div>
      }

        <div className={[
          styles.videoSection__content,
          'pin'
        ].join(' ')}>

        <Container centered>
          <Stack>
            <h2 className="as-h1">
              {content.title}
            </h2>
            <button
              className={[
                buttonStyles.buttonlink,
                'uppercase'
                ].join(' ')}
              onClick={(e) => this.showIframe()}
            >
                  Video Abspielen
            </button>
          </Stack>
        </Container>

        </div>
        <Image
          className="pin"
          fluid={image}
          style={{position: 'absolute'}}
          alt={content.background_image.alt}
        />
      </section>
    )
  }
}

export default LargeVideo
