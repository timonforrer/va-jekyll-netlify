import React from 'react'
import FeaturedMusic from './featuredmusic'
import Musicians from './musicians'
import VideoDescription from './videodescription'
import LargeVideo from './largevideo'
import UpcomingShows from './upcomingshows'

class Slice extends React.Component {
  components = {
    featured_music: FeaturedMusic,
    musicians: Musicians,
    video_w__description: VideoDescription,
    large_video: LargeVideo,
    upcoming_shows: UpcomingShows,
  }
  render () {
    const props = this.props
    const Slice = this.components[this.props.type || 'featured_music']
    return <Slice {...props} />
  }
}

export default Slice
