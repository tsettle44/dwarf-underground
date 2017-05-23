import React, { Component } from 'react'
import './NavLinks.css'

class NavLinks extends Component {
  render() {
    const links = this.props.links.map((link, i) => <a href="#" key={i}>{link}</a>)
    return (
      <div className="float-right nav-links">
        {links}
      </div>
    )
  }
}

export default NavLinks