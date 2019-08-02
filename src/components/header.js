// import { Link } from "gatsby"
import PropTypes from "prop-types"
// import React from "react"

const Header = ({ siteTitle }) => (
  // <header>
  //   <div>
  //     <Link to="/">
  //       {siteTitle}
  //     </Link>
  //   </div>
  // </header>
  null
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
