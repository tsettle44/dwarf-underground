import React, { Component } from 'react'
import Link1 from './Link1/Link1.js'
import Link2 from './Link2/Link2.js'
import Link3 from './Link3/Link3.js'
import Link4 from './Link4/Link4.js'
import './Links.css'

class Links extends Component {
    render() {
        return (
             <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>

                <Link1 />
                <Link2 />
                <Link3 />
                <Link4 />
                
          </div>            
        )
    }
}

export default Links