import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

import '../styles/global.scss'

const Layout = (props) => (
  <main className={props.className}>{props.children}</main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
