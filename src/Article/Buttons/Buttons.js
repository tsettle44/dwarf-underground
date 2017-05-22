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
        const form = articleTag.children[2]

        form.removeAttribute('class', 'hide')
    }

    CommentSubmit(ev) {
        debugger
        const form = ev.currentTarget
        console.log(form)
    }

    render() {
        return (
            <div className="article-links">
                    <a className="article-link" onClick={this.CommentClick.bind(this)}>
                        <i className="fa fa-comments-o"></i>
                        <span className="article-link-text">Comments</span>
                    </a>
                    <a className="article-link" href="#">
                        <i className="fa fa-share"></i>
                        <span className="article-link-text">Share Post</span>
                    </a>
            <form className="form hide" onSubmit={this.CommentSubmit}>
                <input type="text" />
            </form>
            </div>
        )
    }
}

export default Buttons