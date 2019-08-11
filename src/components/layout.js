import React from "react"
import PropTypes from "prop-types"

import '../styles/global.scss'

const Layout = (props) => (
  <main className={props.className}>{props.children}</main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
