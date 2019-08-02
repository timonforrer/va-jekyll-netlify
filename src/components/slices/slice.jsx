import React from 'react'
import FeaturedMusic from './featuredmusic'
import Musicians from './musicians'
import VideoDescription from './videodescription'

class Slice extends React.Component {
  components = {
    featured_music: FeaturedMusic,
    musicians: Musicians,
    video_w__description: VideoDescription
  }
  render () {
    const props = this.props
    const Slice = this.components[this.props.type || 'featured_music']
    return <Slice {...props} />
  }
}

export default Slice
