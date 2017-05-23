import React, { Component } from 'react'

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: '',
            comments: []
        }

        this.HandleChange = this.HandleChange.bind(this)
        this.addComment = this.addComment.bind(this)
    }

    HandleChange(ev) {
        this.setState({
            comment: ev.target.value
        })
    }

    addComment(ev) {
        const state = {...this.state}
        const comment = {
            text: this.state.comment,
            time: new Date()
        }

        state.comments.push(comment)
        state.comment = ''
        this.setState(state)
    }

    render() {
        return(
            <div>
            <textarea placeholder="Enter a comment" value={this.state.comment} onChange={this.HandleChange.bind(this)}></textarea>
            <button className="button" onClick={this.addComment.bind(this)}>Submit Commment</button>
            {this.state.comments.map((comment, i) => {
                return(
                    <div key={i} className='comment'>
                        <div>{comment.text}</div>
                    </div>
                )
            })}
            </div>
        )
    }
}
export default Comments