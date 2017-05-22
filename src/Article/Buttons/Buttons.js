import React, { Component } from 'react'
import './Buttons.css'

class Buttons extends Component {
    constructor() {
        super()
        this.state = {
            comments: [],
        }
    }
    
    CommentClick(ev) {
        ev.preventDefault
        const btn = ev.currentTarget
        const articleTag = btn.parentElement
        const input = articleTag.children[2]

        input.setAttribute('type', 'text')

        console.log(this.state.comments)
    }

    SubmitComment(ev) {
        
    }

    render() {
        return (
            <div className="article-links">
                    <a className="article-link" href="#" onClick = {this.CommentClick.bind(this)}>
                        <i className="fa fa-comments-o"></i>
                        <span className="article-link-text">Comments</span>
                    </a>
                    <a className="article-link" href="#">
                        <i className="fa fa-share"></i>
                        <span className="article-link-text">Share Post</span>
                    </a>
            <form onSubmit = {this.SubmitComment.bind(this)}>
                <input className='input' type="hidden"></input>
            </form>
            </div>
        )
    }
}

export default Buttons