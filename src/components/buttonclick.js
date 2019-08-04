import React from 'react'

class ButtonClick extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      click: 0
    }
  }

  render() {
    return <><button onClick={(e) => this.setState({click: this.state.click = this.state.click + 1})}>click</button> clicked {this.state.click} times</>
  }
}

export default ButtonClick
