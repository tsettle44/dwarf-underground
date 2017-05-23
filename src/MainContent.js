import React, { Component } from 'react'
import Article from './Article'
import Ad from './Ad'
import OtherArticleLinks from './OtherArticleLinks'

class MainContent extends Component {
  render() {
    return (
      <main className="expanded row">
        <Article />
        
        <Ad />

        <OtherArticleLinks />
      </main>
    )
  }
}

export default MainContent