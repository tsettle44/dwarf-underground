import React, { Component } from 'react'

class Comments extends Component {
    render() {
        return(
            <div>
            <textarea placeholder="Enter a comment"></textarea>
            <button className="button">Submit Commment</button>
            </div>
        )
    }
}
export default Comments