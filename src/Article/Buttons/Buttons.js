import React, { Component } from 'react'
import Comments from './Comments'
import './Buttons.css'

class Buttons extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showComments: false,
        }
        
        this.CommentClick =this.CommentClick.bind(this)
    }
    
    CommentClick(ev) {
        ev.preventDefault()
        this.setState({
            showComments: !this.state.showComments
        })
    }

    CommentSubmit(ev) {
        ev.preventDefault()
        const form = ev.currentTarget
        
        
    }

    render() {
        return (
            <div>
            <div className="article-links">
                    <a className="article-link" onClick={this.CommentClick.bind(this)}>
                        <i className="fa fa-comments-o"></i>
                        <span className="article-link-text">Comments</span>
                    </a>
                    <a className="article-link" href="#">
                        <i className="fa fa-share"></i>
                        <span className="article-link-text">Share Post</span>
                    </a>
            </div>
            {this.state.showComments ? <Comments /> : null}
            </div>
        )
    }
}

export default Buttons