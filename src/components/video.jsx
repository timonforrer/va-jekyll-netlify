import React from 'react'
import Image from 'gatsby-image'

import styles from './video.module.scss'

class Video extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  showIframe = () => this.setState({ show: true })
  hideIframe = () => this.setState({ show: false })
  render() {
    return (
      <div className={styles.video}>
        <div
          className={styles.video__container}
          style={{
            backgroundImage:
              this.props.fluid === undefined ?
              `url(https://img.youtube.com/vi/${this.props.ytid}/maxresdefault.jpg)` :
              null
            }}
          onClick={(e) => this.showIframe()}
          >
              {this.state.show &&
                <iframe
                  title={this.props.ytid}
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${this.props.ytid}?autoplay=1`}
                  frameBorder="0"
                  allowFullScreen
                  className={[
                    styles.video__iframe,
                    'pin',
                    this.props.className ? this.props.className : ''
                  ].join(' ')}
                >
                </iframe>
              }
              {this.props.fluid && <Image style={{position: 'absolute'}} className="pin" fluid={this.props.fluid} />}
        </div>
      </div>
    )
  }
}

export default Video
